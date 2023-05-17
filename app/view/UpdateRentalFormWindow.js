Ext.define('moviesRentalApp.view.UpdateRentalFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'updaterentalformwindow',
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
        type: 'rental'
    },
    controller:'rental',


    items: [{
        xtype: 'form',
        reference: 'updaterentalform',
        layout: 'form',
        width: 400,
        height:350,
        

        items: [
        {
            xtype: 'textfield',
            name: 'RentalId',
            fieldLabel: 'Rental ID',
            allowBlank:false,
            disabled:true,
            //bind: '{clickedMovie.MovieId}'
            bind: {
                value: '{clickedRental.RentalId}'
            }
        },{
            xtype: 'textfield',
            name: 'CustomerId',
            fieldLabel: 'Customer ID',
            allowBlank:false,
            bind: '{clickedRental.CustomerId}'
        }, {
            xtype: 'datefield',
            name: 'RentalDate',
            allowBlank:false,

            format: 'Y-m-d',
            value: new Date(),
            dateFormat: 'c',

            fieldLabel: 'Rental Date',
            bind: '{clickedRental.RentalDate}'
        }, {
            xtype: 'textfield',
            name: 'MovieId',
            allowBlank:false,
            fieldLabel: 'Movie ID',
            bind: '{clickedRental.MovieId}'
        }, {
            xtype: 'datefield',
            name: 'ReturnDate',
            //allowBlank:false,

            format: 'Y-m-d',
            value: new Date(),
            dateFormat: 'c',

            fieldLabel: 'Return Date',
            bind:'{clickedRental.ReturnDate}'
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
                var windowview = this.up('updaterentalformwindow');
                windowview.close();
                
            }
            
        }]
    }]
});