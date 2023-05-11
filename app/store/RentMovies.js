Ext.define('moviesRentalApp.store.RentMovies', {
    extend: 'Ext.data.Store',
    alias: 'store.rentmovies',
    storeId:'rentmovies',
    model: 'moviesRentalApp.model.Movie',
    pageSize:10,
    remoteSort: true,
    remoteFilter: true,
    filters:[],

    requires: [
        'moviesRentalApp.model.Movie'
    ],
    

    proxy: {
        type: 'rest',
        model:'moviesRentalApp.model.RentalRequest',
        api: {
            create: 'https://localhost:44376/api/Rental',
            read: 'https://localhost:44376/api/Movies'
        },
        reader: {
            type: 'json',   
            rootProperty:'data',
            totalProperty:'total'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
        },
        cacheParam: undefined,
        

        listeners: {
            exception: function(proxy, response, operation) {
                console.log('Error', operation.getError());
            }
        }
    },

    autoLoad: true,

    
});