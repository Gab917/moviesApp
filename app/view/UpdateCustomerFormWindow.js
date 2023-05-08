Ext.define('moviesRentalApp.view.UpdateCustomerFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'updatecustomerformwindow',
    requires:[
        'moviesRentalApp.controller.CustomerController'
    ],
    

    title: 'Update/Delete Customer',
    
    width: 400,
    height:400,
    modal: true,
    autoShow: true,
    resizable:false,
    style: {
        borderRadius: '5px'
    },

    viewModel: {
        type: 'customer'
    },
    controller:'customer',


    items: [{
        xtype: 'form',
        reference: 'updatecustomerform',
        layout: 'form',
        width: 400,
        height:350,
        

        items: [
        {
            xtype: 'textfield',
            name: 'CustomerId',
            fieldLabel: 'CustomerID',
            allowBlank:false,
            disabled:true,
            
            bind: {
                value: '{clickedCustomer.CustomerId}'
            }
        },{
            xtype: 'textfield',
            name: 'FirstName',
            fieldLabel: 'First Name',
            allowBlank:false,
            bind: '{clickedCustomer.FullName}'
        }, {
            xtype: 'textfield',
            name: 'EmailAddress',
            allowBlank:false,
            fieldLabel: 'Email Address',
            bind: '{clickedCustomer.EmailAddress}'
        }, {
            xtype: 'textfield',
            name: 'Age',
            allowBlank:false,
            fieldLabel: 'Age',
            bind: '{clickedCustomer.Age}'
        }],

        buttons: [{
            text: 'Update',
            handler: 'onUpdateButtonClick'
            
            
            
        }, 
        {
            text:'Delete',
            handler:'onDeleteButtonClick'
            
               
        },
        
        
        {
            text: 'Cancel',
            handler: function(){
                console.log('Closed');
                var windowview = this.up('updatecustomerformwindow');
                windowview.close();
                
            }
            
        }]
    }]
});