Ext.define('moviesRentalApp.controller.MovieController', {
    extend:'Ext.app.ViewController',
    alias:'controller.movie',
    /*config: {
        control: {
            'button[text=Delete]': {
                click: 'onDeleteButtonClick'
            }
        }
    },*/
    onUpdateButtonClick: function(button) {
        var view = button.up('window'); //uses button.up instead of this.up to call parent component view
        var viewmodel = view.getViewModel();
        console.log(viewmodel.get('clickedMovie'));
        var updatedMovie = viewmodel.get('clickedMovie');
        
        var moviesStore = viewmodel.getStore('movies');

        var movieToUpdate = moviesStore.getById(viewmodel.get('clickedMovie.MovieId'));

        movieToUpdate.set(updatedMovie);
        moviesStore.sync({
            success: function(){
                Ext.Msg.alert('Success', 'Movie updated successfully.');
            },
            failure: function(){
                Ext.Msg.alert('Error', 'Failed to add movie.')
            }
        })
    },

    onDeleteButtonClick: function(button) {
        console.log('Delete Pressed');

        var view = button.up('window');
        var viewmodel = view.getViewModel();
        console.log(viewmodel.get('clickedMovie'));
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
