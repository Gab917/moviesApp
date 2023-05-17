Ext.define('moviesRentalApp.controller.RentalController', {
    extend:'Ext.app.ViewController',
    alias:'controller.rental',
   
    onUpdateButtonClick: function(button) {
        
        var view = button.up('window'); //uses button.up instead of this.up to call parent component view
        var viewmodel = view.getViewModel();
        console.log('clickedRental: ',viewmodel.get('clickedRental'));
        var updatedRental = viewmodel.get('clickedRental');

        console.log('updatedRental', updatedRental);
        
        
        var grid = Ext.getCmp('rentalgridid');
        var rentalStore = grid.getStore(); // GETS STORE OF GRID INSTEAD OF VIEWMODEL SINCE I AM INTERACTING WITH
        //THE GRID
        console.log('Grid Store: ',rentalStore);
        var rentalToUpdate = rentalStore.getById(viewmodel.get('clickedRental.RentalId'));

        rentalToUpdate.set(updatedRental);
        rentalStore.sync({
            success: function(){
                Ext.Msg.alert('Success', 'Rental updated successfully.');
            },
            failure: function(){
                Ext.Msg.alert('Error', 'Failed to update rental.')
            }
        })
    },

    onDeleteButtonClick: function(button) {
        console.log('Delete Pressed');
        
        console.log('idProperty',moviesRentalApp.model.Rental.idProperty);
        var view = button.up('window');
        var viewmodel = view.getViewModel();
        console.log(viewmodel.get('clickedRental'));
        //var moviesStore = viewmodel.getStore('movies');
        
        var grid = Ext.getCmp('rentalgridid');
        //var rentalStore = grid.getStore('rentals');
        var rentalStore = grid.getStore();

        var rentalToUpdate = rentalStore.getById(viewmodel.get('clickedRental.RentalId'));

        console.log(viewmodel.get('clickedRental.RentalId'));
        console.log('rentalToUpdate:', rentalToUpdate);
        console.log('rentalStore: ',rentalStore);
        //console.log('clickedRentalid: ',clickedRentalId);

        


        
        
        if (rentalToUpdate){
            rentalStore.remove(rentalToUpdate);
            rentalStore.sync({
                success: function() {
                    Ext.Msg.alert('Success', 'Rental deleted successfully.');
                    view.close();
                },
                failure: function(){
                    Ext.Msg.alert('Error','Failed to delete rental');
                }
            });
        }
    }
});
