Ext.define('moviesRentalApp.view.DeleteMovieWindow', {
    extend: 'Ext.window.Window',
    xtype:'deletemoviewindow',
    title: 'Delete Movie',
    
    modal: true,

    viewModel: {
        type: 'movie'
    },
    

    items: [{
        xtype: 'combobox',
        fieldLabel: 'Movie Title',
        displayField: 'Title',
        valueField: 'MovieId',
        bind: {
            store: '{movies}'
        },
        queryMode: 'remote',
        typeAhead: true,
        forceSelection: true,
        listeners: {
            select: function (combo, record) {
                console.log("listener select working");
                var view = this.up('window');
                var viewModel = view.getViewModel();
                var movie = viewModel.getStore('movies').getById(record.get('MovieId'));
                
                var movieId = record.get('MovieId');
                viewModel.set('selectedMovieId', movieId);

                var titleLabel = view.down('#titleLabel');
                var descriptionLabel = view.down('#descriptionLabel');
                var genreLabel = view.down('#genreLabel');
                var releaseDateLabel = view.down('#releaseDateLabel');
                
                titleLabel.setText(movie.get('Title'));
                descriptionLabel.setText(movie.get('Description'));
                genreLabel.setText(movie.get('Genre'));
                releaseDateLabel.setText(Ext.Date.format(movie.get('ReleaseDate'), 'm/d/Y'));
            }
        }
    }, {
        xtype: 'label',
        itemId: 'titleLabel',
        text: 'label1'
    }, {
        xtype: 'label',
        itemId: 'descriptionLabel',
        text: ''
    }, {
        xtype: 'label',
        itemId: 'genreLabel',
        text: ''
    }, {
        xtype: 'label',
        itemId: 'releaseDateLabel',
        text: ''
    }],
    buttons: [{
        text: 'Delete',
        handler: function () {
            var view = this.up('window');
            var viewModel = view.getViewModel();
            var moviesStore = viewModel.getStore('movies');
            //var movieId = view.down('combobox').getValue();
            var movieId = viewModel.get('selectedMovieId');
            var movie = moviesStore.getById(movieId);
            
            console.log('Movie retrieved by Id: ',movie);
            console.log('movieStore: ', moviesStore);
            if (movie) {
                moviesStore.remove(movie);
                moviesStore.sync({
                    success: function () {
                        Ext.Msg.alert('Success', 'Movie deleted successfully.');
                        view.close();
                    },
                    failure: function () {
                        Ext.Msg.alert('Error', 'Failed to delete movie.');
                    }
                });
                
            }
        }
    }, {
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    }]
});