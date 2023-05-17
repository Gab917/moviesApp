Ext.define('moviesRentalApp.view.AddCustomerFormWindow', {
    extend: 'Ext.window.Window',
    xtype: 'addcustomerformwindow',

    title: 'Add Customer',
    
    width: 400,
    height:350,
    modal: true,
    autoShow: true,
    resizable:false,
    style: {
        borderRadius: '5px'
    },

    viewModel: {
        type: 'customer'
    },

    items: [{
        xtype: 'form',
        reference: 'addcustomerform',
        
        
        layout: 'form',
        width: 400,
        height:300,

        items: [{
            xtype: 'textfield',
            name: 'FullName',
            fieldLabel: 'Full Name',
            allowBlank:false,
            bind: '{newCustomer.FullName}'
        }, {
            xtype: 'textfield',
            name: 'EmailAddress',
            allowBlank:false,
            fieldLabel: 'Email Address',
            bind: '{newCustomer.EmailAddress}'
        }, {
            xtype: 'textfield',
            name: 'Age',
            allowBlank:false,
            fieldLabel: 'Age',
            bind: '{newCustomer.Age}'
        }],

        buttons: [{
            text: 'Save',
            handler: function() {
                var form = this.up('form');
                if (form.isValid()){
                    var view = this.up('window');
                    var viewmodel = view.getViewModel();
                    var newCustomer = viewmodel.get('newCustomer');
                    var customerStore = viewmodel.getStore('customers');


                    newCustomer.set('CustomerId',null);
                    var addRequest = Ext.create('moviesRentalApp.model.Movie', newCustomer.getData());
                    customerStore.add(addRequest);
                    customerStore.sync({
                    success: function(){
                        Ext.Msg.alert('Success', 'Customer added successfully.');
                        viewmodel.set('newCustomer', Ext.create('moviesRentalApp.model.Customer'));

                    },
                    failure: function() {
                        Ext.Msg.alert('Error', 'Failed to add customer.')
                    }
                })
                }

                else {
                    Ext.Msg.alert('Error', 'Fill the required fields!.')
                }
                

            }
            
            
        }, {
            text: 'Cancel',
            handler: function(){
                console.log('Closed');
                var windowview = this.up('addcustomerformwindow');
                windowview.close();
                
            }
            
        }]
    }]
});