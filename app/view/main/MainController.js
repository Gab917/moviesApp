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
            //
        }
    },
    
    onAddMovieClick: function() {
        var window = Ext.create('moviesRentalApp.view.AddMovieFormWindow');
        window.show();
    }
});
