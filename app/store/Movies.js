Ext.define('moviesRentalApp.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',

    requires: [
        'moviesRentalApp.model.Movie'
    ],

    model: 'moviesRentalApp.model.Movie',

    proxy: {
        type: 'rest',
        url: 'https://localhost:44376/api/Movies',
        reader: {
            type: 'json',   
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        api: {
            create: 'POST'
        }
    },

    autoLoad: true
});