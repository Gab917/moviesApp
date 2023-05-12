Ext.define('moviesRentalApp.controller.CustomerController', {
    extend:'Ext.app.ViewController',
    alias:'controller.customer',
    
    onUpdateButtonClick: function(button) {
        var view = button.up('window'); //uses button.up instead of this.up to call parent component view
        var viewmodel = view.getViewModel();
        console.log(viewmodel.get('clickedCustomer'));
        var updatedCustomer = viewmodel.get('clickedCustomer');

        var grid = Ext.getCmp('customergrid');
        var customerStore = grid.getStore();
        //var customerStore = viewmodel.getStore('customers');

        var customerToUpdate = customerStore.getById(viewmodel.get('clickedCustomer.CustomerId'));

        customerToUpdate.set(updatedCustomer);
        customerStore.sync({
            success: function(){
                Ext.Msg.alert('Success', 'Customer updated successfully.');
            },
            failure: function(){
                Ext.Msg.alert('Error', 'Failed to update customer.')
            }
        })
    },

    onDeleteButtonClick: function(button) {
        console.log('Delete Pressed');

        var view = button.up('window');
        var viewmodel = view.getViewModel();
        console.log(viewmodel.get('clickedCustomer'));
        
        var grid = Ext.getCmp('customergrid');
        var customerStore = grid.getStore();
        //var customerStore = viewmodel.getStore('customers');

        var customerToUpdate = customerStore.getById(viewmodel.get('clickedCustomer.CustomerId'));
        console.log('movieToUpdate:', customerToUpdate);

        if (customerToUpdate){
            customerStore.remove(customerToUpdate);
            customerStore.sync({
                success: function() {
                    Ext.Msg.alert('Success', 'Customer deleted successfully.');
                    view.close();
                },
                failure: function(){
                    Ext.Msg.alert('Error','Failed to delete customer');
                }
            });
        }
    },

    onAddCustomerClick: function() {
        var window = Ext.create('moviesRentalApp.view.AddCustomerFormWindow');
        //var window = Ext.create('moviesRentalApp.view.AddMovieForm');
        
        window.show();
    },
});
