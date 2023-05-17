Ext.define('moviesRentalApp.view.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customergrid',
    id: 'customergrid',
    
    requires: [
        'moviesRentalApp.viewmodel.CustomerViewModel',
        'moviesRentalApp.store.Customers'
    ],
    controller:'customer',

    viewModel: {
        type: 'customer'
    },

    


    title: 'Customers',
    bind:{
        store:'{customers}'
    },

    selModel: {
        selType:'rowmodel'
    },

    
    listeners:{

        select: function(grid, record,index,eOpts) {
            var window = Ext.create('moviesRentalApp.view.UpdateCustomerFormWindow', {
                listeners: {
                    show: function() {
                        var viewmodel = this.lookupViewModel();
                        viewmodel.set('clickedCustomer', record.getData());
                    }
                }
            });
            window.show();
        },

        afterrender: function(grid) {
            grid.getStore().on('load', function() {
                grid.getView().refresh();
            });
        }

    },

    columns: [
        { text: 'ID', dataIndex: 'CustomerId', width: 50 },
        { text: 'Full Name', dataIndex: 'FullName', flex: 1 },
        { text: 'Email Address', dataIndex: 'EmailAddress', flex: 2 },
        { text: 'Age', dataIndex: 'Age', flex: 1 },
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying {0} - {1} of {2}',
        emptyMsg: 'No data to display',
    },
    tbar:[
        {
            text:'Add New Customer',
            handler:'onAddCustomerClick'
        },
        
        {
            xtype: 'textfield',
            emptyText: 'Search by Full Name...',
            enableKeyEvents: true,
            listeners: {
                change: function(field, newValue, oldValue) {
                    var store = field.up('grid').getStore();
                    store.getProxy().setExtraParams({filter:newValue})
                    store.loadPage(1);
                    //store.reload();
                }

                /*keyup: function (field) {
                    var store = field.up('grid').getStore();
                    var value = field.getValue();
                    store.clearFilter();
                    if (value) {
                        store.filter({
                            property: 'CustomerId',  // replace with the name of the field to filter on
                            anyMatch: true,
                            caseSensitive: false,
                            value: value
                        });
                    }
                }*/
            }
        },
        {
            xtype:'tbtext',
            text:'Click on a record to Update/Delete'
        }
        
    ],
    
});

