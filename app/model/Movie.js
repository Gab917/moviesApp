Ext.define('moviesRentalApp.model.Movie', {
    extend: 'Ext.data.Model',
    autoGenId:false,
    //validation:false,
    idProperty:'MovieId',
    fields: [

        { name: 'MovieId', type: 'int' , persist:false},
        { name: 'Title', type: 'string' },
        { name: 'Genre', type: 'string' },
        { name: 'ReleaseDate'},
        

        //'MovieId', 'Title', 'Description','Genre','ReleaseDate'
    ]
});
