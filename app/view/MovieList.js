Ext.define('moviesRentalApp.view.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',
    
    requires: [
        'moviesRentalApp.viewmodel.MovieListViewModel',
        'moviesRentalApp.store.Movies'
    ],

    viewModel: 'movielist',

    title: 'Movies',
    store: {
        type: 'movies'
    },

    columns: [
        { text: 'ID', dataIndex: 'MovieId', width: 50 },
        { text: 'Title', dataIndex: 'Title', flex: 1 },
        { text: 'Description', dataIndex: 'Description', flex: 2 },
        { text: 'Genre', dataIndex: 'Genre', flex: 1 },
        { text: 'Release Date', dataIndex: 'ReleaseDate', flex: 1 }
    ]
});

