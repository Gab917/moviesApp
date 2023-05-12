Ext.define('moviesRentalApp.model.AddMovie', {
    extend: 'Ext.data.Model',
    autoGenId:false,
    idProperty:null,
    fields: [

        { name: 'Title', type: 'string' },
        { name: 'Genre', type: 'string' },
        { name: 'ReleaseDate'},
        

        //'MovieId', 'Title', 'Description','Genre','ReleaseDate'
    ]
});
