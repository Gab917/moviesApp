Ext.define('moviesRentalApp.model.Movie', {
    extend: 'Ext.data.Model',
    idProperty:'MovieId',
    fields: [

        { name: 'MovieId', type: 'int' },
        { name: 'Title', type: 'string' },
        { name: 'Genre', type: 'string' },
        { name: 'ReleaseDate'},
        

        //'MovieId', 'Title', 'Description','Genre','ReleaseDate'
    ]
});
