Ext.define('moviesRentalApp.view.AddMovieFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'addmovieformwindow',

    title: 'Add Movie',
    
    width: 400,
    height:350,
    modal: true,
    autoShow: true,
    resizable:false,
    style: {
        borderRadius: '5px'
    },

    viewModel: {
        type: 'movie'
    },

    items: [{
        xtype: 'form',
        reference: 'addmovieform',
        
        
        layout: 'form',
        width: 400,
        height:300,

        items: [{
            xtype: 'textfield',
            name: 'Title',
            fieldLabel: 'Title',
            allowBlank:false,
            bind: '{newMovie.Title}'
        }, {
            xtype: 'textareafield',
            name: 'Description',
            allowBlank:false,
            fieldLabel: 'Description',
            bind: '{newMovie.Description}'
        }, {
            xtype: 'textfield',
            name: 'Genre',
            allowBlank:false,
            fieldLabel: 'Genre',
            bind: '{newMovie.Genre}'
        }, {
            xtype: 'datefield',
            name: 'ReleaseDate',
            allowBlank:false,

            format: 'Y-m-d',
            value: new Date(),
            dateFormat: 'c',

            fieldLabel: 'Release Date',
            bind:'{newMovie.ReleaseDate}'
        }],

        buttons: [{
            text: 'Save',
            /*bind: {
                disabled: '{!canAddMovie}'
                //disabled:true
            },*/
            handler: function() {
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
                    //viewmodel.set('newMovie', Ext.create('moviesRentalApp.model.Movie'));

                },
                failure: function() {
                    Ext.Msg.alert('Error', 'Failed to add movie.')
                }
            })

            }
            
            
        }, {
            text: 'Cancel',
            handler: function(){
                console.log('Closed');
                var windowview = this.up('addmovieformwindow');
                windowview.close();
                
            }
            
        }]
    }]
});