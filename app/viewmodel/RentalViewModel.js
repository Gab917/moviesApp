Ext.define('moviesRentalApp.viewmodel.RentalViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rental',

    data: {
        
        clickedRental: Ext.create('moviesRentalApp.model.Rental'),
        customerId:null,
        
    },
    models:'moviesRentalApp.model.Rental',

    stores: {
        rentals: {
            type: 'rentals',
            listeners: {
                load: function (store, records) {
                    console.log('rental store loaded:', records);
                }
            }
        }
    },

    

});