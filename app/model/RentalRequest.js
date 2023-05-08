Ext.define('moviesRentalApp.model.RentalRequest', {
    extend: 'Ext.data.Model',
    //idProperty:'CustomerId',
    fields: [

        { name: 'CustomerId', type: 'int' },
        { name: 'MovieIds', type: 'auto' },
        
    ]
});
