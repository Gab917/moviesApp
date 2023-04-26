Ext.define('moviesRentalApp.viewmodel.AddMovieFormViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.addmovieform',

    data: {
        Title: '',
        Description: '',
        Genre: '',
        ReleaseDate: null
    },

    formulas: {
        isFormValid: function(get) {
            return !!get('Title') && !!get('Description') && !!get('Genre') && !!get('ReleaseDate');
        }
    },

    stores: {
        movies: {
            type: 'movies'
        }
    },

    onSaveClick: function() {
        var form = this.getView(),
            values = form.getValues(),
            moviesStore = this.getViewModel().getStore('movies'),
            newMovie = Ext.create('moviesRentalApp.model.Movie', values);

        if (form.isFormValid()) {
            moviesStore.add(newMovie);
            moviesStore.sync({
                success: function() {
                    form.close();
                }
            });
        }
    },

    saveMovie: function() {
        console.log('saveMovie function called');
        var me = this,
            view = me.getView(),
            form = view.lookupReference('addmovieform'),
            values = form.getValues(),
            moviesStore = me.getStore('movies'),
            newMovie = Ext.create('moviesRentalApp.model.Movie', values);

        if (form.isValid()) {
            moviesStore.add(newMovie);
            moviesStore.sync({
                success: function() {
                    view.close();
                }
            });
        }
    },

    onCancelClick: function() {
        console.log('Closed');
        this.getView().close();
    }
});