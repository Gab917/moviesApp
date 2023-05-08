Ext.define('moviesRentalApp.model.Rental', {
    extend: 'Ext.data.Model',
    idProperty:'RentalId',
    fields: [

        { name: 'RentalId'},
        { name: 'CustomerId'},
        { name: 'CustomerName'},
        { name: 'RentalDate'},
        { name: 'MovieId'},
        { name: 'MovieTitle'},
        { name: 'ReturnDate'},
        

        //'MovieId', 'Title', 'Description','Genre','ReleaseDate'
    ]
});
