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
        type: 'addmovieform'
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
            bind: '{Title}'
        }, {
            xtype: 'textareafield',
            name: 'Description',
            fieldLabel: 'Description',
            bind: '{Description}'
        }, {
            xtype: 'textfield',
            name: 'Genre',
            fieldLabel: 'Genre',
            bind: '{Genre}'
        }, {
            xtype: 'datefield',
            name: 'ReleaseDate',
            fieldLabel: 'Release Date',
            bind:'{ReleaseDate}'
        }],

        buttons: [{
            text: 'Save',
            formBind:true,
            bind: {
                handler: '{saveMovie}',
            }
            
            
        }, {
            text: 'Cancel',
            handler: function(){
                console.log('Closed');
            }
            
        }]
    }]
});