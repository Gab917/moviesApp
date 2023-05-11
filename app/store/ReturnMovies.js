Ext.define('moviesRentalApp.store.ReturmMovies', {
    extend: 'Ext.data.Store',
    alias: 'store.returnmovies',
    storeId:'returnmovies',
    model: 'moviesRentalApp.model.Rental',
    idProperty:'RentalId',
    pageSize:5,
    remoteSort: true,
    remoteFilter: true,

    requires: [
        'moviesRentalApp.model.Rental'
    ],
    

    proxy: {
        type: 'rest',
        model:'moviesRentalApp.model.ReturnRequest',
        api: {
            create: 'https://localhost:44376/api/Rental/ReturnMovies',
            read: 'https://localhost:44376/api/Rental/GetRentalsByCustomerId'
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


        listeners: {
            exception: function(proxy, response, operation) {
                console.log('Error', operation.getError());
            }
        }
    },

    //autoLoad: true,

    
});