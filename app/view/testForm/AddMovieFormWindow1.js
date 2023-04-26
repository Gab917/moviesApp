Ext.define('moviesRentalApp.view.AddMovieWindow1', {
    extend: 'Ext.window.Window',
    xtype: 'addmoviewindow1',
    
    title: 'Add Movie',
    modal: true,
    width: 400,

    items: [{
        xtype: 'textfield',
        name: 'title',
        fieldLabel: 'Title',
        bind: '{movie.title}'
    }, {
        xtype: 'textareafield',
        name: 'description',
        fieldLabel: 'Description',
        bind: '{movie.description}'
    }, {
        xtype: 'textfield',
        name: 'genre',
        fieldLabel: 'Genre',
        bind: '{movie.genre}'
    }, {
        xtype: 'datefield',
        name: 'releaseDate',
        fieldLabel: 'Release Date',
        bind: '{movie.releaseDate}'
    }],

    buttons: [{
        text: 'Save',
        handler: 'onSaveClick'
    }, {
        text: 'Cancel',
        handler: 'onCancelClick'
    }]
});