Ext.define('moviesRentalApp.model.Customer', {
    extend: 'Ext.data.Model',
    idProperty:'CustomerId',
    fields: [

        { name: 'CustomerId', type: 'int' },
        { name: 'FullName', type: 'string' },
        { name: 'EmailAddress', type: 'string' },
        { name: 'Age', type: 'int'},
        

        
    ]
});
