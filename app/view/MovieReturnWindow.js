Ext.define('moviesRentalApp.view.MovieReturnWindow',{
    extend:'Ext.window.Window',
    xtype:'moviereturnwindow',
    title:'Return Movies',
    /*requires: [
        
       'moviesRentalApp.store.ReturnMovies'
    ],*/
    height:600,
    width:1000,
    layout:'fit',
    modal:true,
    items:[{
        xtype: 'grid',
        store: {
            type:'returnmovies'
        },

        selModel: {
            selType:'checkboxmodel',
            checkOnly: true,
            showHeaderCheckbox: true
        },
        tbar:[
            {
                xtype: 'textfield',
                fieldLabel: 'Customer ID',
                labelWidth: 80,
                itemId: 'customerIdField'
            },
            {
                text:'Select Customer',
                /*handler: function(button) {//THIS METHOD ONLY FILTERS THE VALUES TAKEN FROM THE STORE. DOES NOT USE GET API WITH CUSTOMERID PARAMETER
                    var customerId = button.up('grid').down('#customerIdField').getValue(); // get the value of the textfield
                    var store = button.up('grid').getStore(); // get the store of the grid
                    store.clearFilter(true); // clear any existing filters
                    store.filter('CustomerId', customerId); // set the filter to the customer ID
                    store.load(); // reload the store with the filtered data
                }*/
                handler: function(button) {
                    //var customerId = Ext.ComponentQuery.query('#customerIdField')[0].getValue();
                    //var store = Ext.getStore('returnmovies');
                    var customerId = button.up('grid').down('#customerIdField').getValue(); // get the value of the textfield
                    var store = button.up('grid').getStore(); // get the store of the grid
                    store.getProxy().setExtraParams({ customerId: customerId });
                    store.reload();
                }
            }
        ],

        columns:[
            
        { text: 'ID', dataIndex: 'CustomerId', width: 50 },
        { text: 'Customer Name', dataIndex: 'CustomerName', flex: 1 },
        { text: 'Rental ID', dataIndex: 'RentalId', flex: 1 },
        { text: 'Movie ID', dataIndex: 'MovieId', flex: 1 },
        { text: 'Movie Title', dataIndex: 'MovieTitle', flex: 1 },
        { text: 'Rental Date', dataIndex: 'RentalDate', flex: 2 },
        { text: 'Return Date', dataIndex: 'ReturnDate', flex: 2 }
        ]
    }]

});