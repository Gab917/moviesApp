Ext.define('moviesRentalApp.viewmodel.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movie',

    data: {
        newMovie: moviesRentalApp.model.Movie.create(),
        clickedMovie: Ext.create('moviesRentalApp.model.Movie'),
        
        
    },
    models:'moviesRentalApp.model.Movie',

    stores: {
        movies: {
            type: 'movies',
            autoLoad:true,
            listeners: {
                load: function (store, records) {
                    console.log('movies store loaded:', records);
                }
            }
        }
    },

    formulas: {
        selectedMovie: function (get) { //Selects which movie is selected 
            var movieId = get('selectedMovieId');
            var moviesStore = get('movies');
            var selectedRecord = moviesStore.getById(movieId);
            //console.log(selectedRecord);
            return selectedRecord ? selectedRecord.getData() : {};
        },

        canAddMovie: function (get) {
            var newMovie = get('newMovie');
            return newMovie.get('Title') && newMovie.get('Description') && newMovie.get('Genre') && newMovie.get('ReleaseDate');
        }
    }

});