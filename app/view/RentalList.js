Ext.define('moviesRentalApp.view.RentalList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rentalgrid',
    id: 'rentalgridid',
    controller:'main',
    

    viewModel:{
        type:'rental'
    },

    

    //type: 'movie',

    title: 'Rentals',
    bind:{
        store:'{rentals}'
    },
   

    selModel: {
        selType:'rowmodel'
    },

    
    listeners:{
       
        select: function(grid, record, index, eOpts) {
            var window = Ext.create('moviesRentalApp.view.UpdateRentalFormWindow', {
                listeners: {
                    show: function() {
                        var viewmodel = this.lookupViewModel();
                        viewmodel.set('clickedRental', record.getData());
                    }   
                }
            });
            window.show();
            },
    

    },

    columns: [
        { text: 'ID', dataIndex: 'RentalId', width: 50 },
        { text: 'Customer ID', dataIndex: 'CustomerId', flex: 1 },
        { text: 'Customer Name', dataIndex: 'CustomerName', flex: 1 },
        { text: 'Rental Date', dataIndex: 'RentalDate', flex: 2 },
        { text: 'Movie ID', dataIndex: 'MovieId', flex: 1 },
        { text: 'Movie Title', dataIndex: 'MovieTitle', flex: 1 },
        { text: 'Return Date', dataIndex: 'ReturnDate', flex: 1 }
        
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
            text:'Rent Movies',
            handler: 'onRentMoviesClick'
        },
        {
            text:'Return Movie',
            handler: 'onReturnMoviesClick'
        },

        {
            xtype: 'textfield',
            emptyText: 'Search by Rental ID...',
            enableKeyEvents: true,
            listeners: {

                change: function(field, newValue, oldValue) {
                    var store = field.up('grid').getStore();
                    store.getProxy().setExtraParams({
                        filter:newValue,
                        property:'CustomerId'
                    });
                    store.loadPage(1);
                    //store.reload();
                }


            }
        },
        {
            xtype: 'textfield',
            emptyText: 'Search by Customer Name...',
            enableKeyEvents: true,
            width:200,
            listeners: {

                change: function(field, newValue, oldValue) {
                    var store = field.up('grid').getStore();
                    store.getProxy().setExtraParams({
                        filter:newValue,
                        property:'CustomerName'
                    });
                    store.loadPage(1);
                    //store.reload();
                }


            }
        },

        {
            xtype: 'textfield',
            emptyText: 'Search by Movie Title...',
            enableKeyEvents: true,
            listeners: {

                change: function(field, newValue, oldValue) {
                    var store = field.up('grid').getStore();
                    store.getProxy().setExtraParams({
                        filter:newValue,
                        property:'MovieTitle'
                    });
                    store.loadPage(1);
                    //store.reload();
                }


            }
        },

        


        {
            xtype:'tbtext',
            text:'Click on a record to Update/Delete'
        }
        
    ],
    
});

