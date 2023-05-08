Ext.define('moviesRentalApp.view.UpdateMovieFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'updatemovieformwindow',
    requires:[
        'moviesRentalApp.controller.MovieController'
    ],

    title: 'Update Movie',
    
    width: 400,
    height:400,
    modal: true,
    autoShow: true,
    resizable:false,
    style: {
        borderRadius: '5px'
    },

    viewModel: {
        type: 'movie'
    },
    controller:'movie',


    items: [{
        xtype: 'form',
        reference: 'updatemovieform',
        layout: 'form',
        width: 400,
        height:350,
        //records: '{clickedMovie}',

        items: [
        {
            xtype: 'textfield',
            name: 'MovieId',
            fieldLabel: 'MovieId',
            allowBlank:false,
            disabled:true,
            //bind: '{clickedMovie.MovieId}'
            bind: {
                value: '{clickedMovie.MovieId}'
            }
        },{
            xtype: 'textfield',
            name: 'Title',
            fieldLabel: 'Title',
            allowBlank:false,
            bind: '{clickedMovie.Title}'
        }, {
            xtype: 'textareafield',
            name: 'Description',
            allowBlank:false,
            fieldLabel: 'Description',
            bind: '{clickedMovie.Description}'
        }, {
            xtype: 'textfield',
            name: 'Genre',
            allowBlank:false,
            fieldLabel: 'Genre',
            bind: '{clickedMovie.Genre}'
        }, {
            xtype: 'datefield',
            name: 'ReleaseDate',
            allowBlank:false,

            format: 'Y-m-d',
            value: new Date(),
            dateFormat: 'c',

            fieldLabel: 'Release Date',
            bind:'{clickedMovie.ReleaseDate}'
        }],

        buttons: [{
            text: 'Update',
            
            handler: 'onUpdateButtonClick'
            /*handler: function() {
                var view = this.up('window');
                var viewmodel = view.getViewModel();
                var newMovie = viewmodel.get('newMovie');
                var moviesStore = viewmodel.getStore('movies');

                console.log('moviesStoreAdd:',moviesStore);

            newMovie.setId(null);
            moviesStore.add(newMovie);
            moviesStore.sync({
                success: function(){
                    Ext.Msg.alert('Success', 'Movie added successfully.');
                    viewmodel.set('newMovie', Ext.create('moviesRentalApp.model.Movie'));

                },
                failure: function() {
                    Ext.Msg.alert('Error', 'Failed to add movie.')
                }
            })

            }*/
            
            
        }, 
        {
            text:'Delete',
            handler:'onDeleteButtonClick'
            /*handler: function(){
                console.log('Delete Pressed');

                var view = this.up('window');
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
            }*/
            
        },
        
        
        {
            text: 'Cancel',
            handler: function(){
                console.log('Closed');
                var windowview = this.up('updatemovieformwindow');
                windowview.close();
                
            }
            
        }]
    }]
});