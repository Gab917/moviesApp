Ext.define('moviesRentalApp.store.Rentals', {
    extend: 'Ext.data.Store',
    alias: 'store.rentals',
    storeId:'storerentals',
    model: 'moviesRentalApp.model.Movie',
    idProperty:'RentalId',
    remoteSort:true,
    remoteFilter:true,
    pageSize:10,

    requires: [
        'moviesRentalApp.model.Rental'
    ],

    
    

    proxy: {
        type: 'rest',
        //model:'moviesRentalApp.model.RentalRequest',
        
        api: {
            create: 'https://localhost:44376/api/Rental',
            read: 'https://localhost:44376/api/Rental',
            update: 'https://localhost:44376/api/Rental',
            destroy: 'https://localhost:44376/api/Rental'
        },
        reader: {
            type: 'json',   
            rootProperty:'data',
            totalProperty:'total'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
        },
       

        listeners: {
            exception: function(proxy, response, operation) {
                console.log('Error', operation.getError());
            }
        }
    },

    autoLoad: true,

    listeners: {
        write: function(store, operation) {
            store.load();
        }
    }
});