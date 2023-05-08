Ext.define('moviesRentalApp.view.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customergrid',
    id: 'customergrid',
    
    requires: [
        'moviesRentalApp.viewmodel.CustomerViewModel',
        'moviesRentalApp.store.Customers'
    ],
    controller:'customer',

    viewmodel: {
        type: 'customer'
    },

    


    title: 'Customers',
    store: {
        type: 'customer',
        
    },

    selModel: {
        selType:'rowmodel'
    },

    
    listeners:{

        selectionchange: function(grid,selected,eOpts) {
            var window = Ext.create('moviesRentalApp.view.UpdateCustomerFormWindow', {
                listeners: {
                    show: function() {
                        var vm = this.lookupViewModel();
                        vm.set('clickedCustomer', selected[0].getData());
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
        pageSize: 10
    },
    tbar:[
        {
            text:'Add New Customer',
            handler:'onAddCustomerClick'
        },
        
        {
            xtype: 'textfield',
            emptyText: 'Search by ID...',
            enableKeyEvents: true,
            listeners: {
                keyup: function (field) {
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
                }
            }
        },
        {
            xtype:'tbtext',
            text:'Click on a record to Update/Delete'
        }
        
    ],
    
});

