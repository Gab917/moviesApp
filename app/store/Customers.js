Ext.define('moviesRentalApp.store.Customers', {
    extend: 'Ext.data.Store',
    alias: 'store.customer',
    storeId:'storecustomer',
    model: 'moviesRentalApp.model.Customer',
    idProperty:'CustomerId',
    pageSize:10,

    requires: [
        'moviesRentalApp.model.Customer'
    ],

    
    

    proxy: {
        type: 'rest',
        //url: 'https://localhost:44376/api/Customer',//change to use api property
        api: {
            create: 'https://localhost:44376/api/Customer',
            read: 'https://localhost:44376/api/Customer',
            update: 'https://localhost:44376/api/Customer',
            destroy: 'https://localhost:44376/api/Customer'
        },
        reader: {
            type: 'json',   
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            transform: function (data, request) {
                // Removes the CustomerId field from the request body for create requests
                if (request.getAction() === 'create') {
                    delete data.CustomerId;
                }

                return data;
            }
        },
        /*actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },*/

        listeners: {
            exception: function(proxy, response, operation) {
                console.log('Error', operation.getError());
            }
        }
    },

    autoLoad: true
});