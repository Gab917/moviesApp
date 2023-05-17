Ext.define('moviesRentalApp.model.Rental', {
    extend: 'Ext.data.Model',
    idProperty:'RentalId',
    fields: [

        { name: 'RentalId', type :'int'},
        { name: 'CustomerId', type :'int'},
        { name: 'CustomerName', type: 'string' },
        { name: 'RentalDate'},
        { name: 'MovieId', type :'int'},
        { name: 'MovieTitle', type: 'string' },
        { name: 'ReturnDate'},
        

        //'MovieId', 'Title', 'Description','Genre','ReleaseDate'
    ]
});
