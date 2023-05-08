Ext.define('moviesRentalApp.store.ReturmMovies', {
    extend: 'Ext.data.Store',
    alias: 'store.returnmovies',
    storeId:'returnmovies',
    model: 'moviesRentalApp.model.Rental',

    requires: [
        'moviesRentalApp.model.Rental'
    ],
    

    proxy: {
        type: 'rest',
        //model:'moviesRentalApp.model.RentalRequest',
        api: {
            //create: 'https://localhost:44376/api/Rental',
            read: 'https://localhost:44376/api/Rental'
        },
        reader: {
            type: 'json',   
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

    //autoLoad: true,

    
});