Ext.define('moviesRentalApp.viewmodel.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customer',

    data: {
        newCustomer: Ext.create('moviesRentalApp.model.Customer'),
        clickedCustomer: Ext.create('moviesRentalApp.model.Customer'),
        
        
    },
    models:'moviesRentalApp.model.Customer',

    stores: {
        customers: {
            type: 'customer',
            listeners: {
                load: function (store, records) {
                    console.log('customers store loaded:', records);
                }
            }
        }
    },

    

});