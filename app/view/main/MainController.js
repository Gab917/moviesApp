/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('moviesRentalApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: [
        //'moviesRentalApp.view.AddMovieFormWindow'
    ],

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            var window = Ext.create('moviesRentalApp.view.DeleteMovieWindow');
            window.show();
        }
    },
    onRentMoviesClick: function(){
        var window = Ext.create('moviesRentalApp.view.MovieRentalWindow');
        window.show();
    },

    onReturnMoviesClick: function(){
        var window = Ext.create('moviesRentalApp.view.MovieReturnWindow');
        window.show();
    },
    
    onAddMovieClick: function() {
        var window = Ext.create('moviesRentalApp.view.AddMovieFormWindow');
        //var window = Ext.create('moviesRentalApp.view.AddMovieForm');
        
        window.show();
    },

    onDeleteMovieClick: function() {
        var window = Ext.create('moviesRentalApp.view.DeleteMovieWindow');
        window.show();
    },

    onDeleteMovieButton: function(){
        console.log('Delete Pressed');

        var view = this.up('window');
        var viewmodel = view.getViewModel();
        console.log(viewmodel.get('clickedMovie'));
        var updatedMovie = viewmodel.get('clickedMovie');
        
        var moviesStore = viewmodel.getStore('movies');

        var movieToUpdate = moviesStore.getById(viewmodel.get('clickedMovie.MovieId'));

        console.log('movieToUpdate:', movieToUpdate);

        if (movieToUpdate){
            moviesStore.remove(movieToUpdate);
            moviesStore.sync({
                success: function() {
                    Ext.Msg.alert('Success', 'Movie deleted successfully.');
                    view.close();
                },
                failure: function(){
                    Ext.Msg.alert('Error','Failed to delete movie');
                }
            });
        }
    }
});
