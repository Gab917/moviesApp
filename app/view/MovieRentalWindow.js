Ext.define('moviesRentalApp.view.MovieRentalWindow',{
    extend:'Ext.window.Window',
    xtype:'movierentalwindow',
    title:'Rent Movies',
    requires: [
        
        'moviesRentalApp.store.RentMovies'
    ],
    height:600,
    width:1000,
    layout:'fit',
    modal:true,
    items:[{
        xtype: 'grid',
        store: {
            type:'rentmovies'
        },

        selModel: {
            selType:'checkboxmodel',
            checkOnly: true,
            showHeaderCheckbox: true
        },bbar: {
            xtype: 'pagingtoolbar',
            
            displayInfo: true,
            displayMsg: 'Displaying {0} - {1} of {2}',
            emptyMsg: 'No data to display',
        },
        tbar:[
            {
                xtype: 'textfield',
                fieldLabel: 'Customer ID',
                labelWidth: 80,
                itemId: 'customerIdField'
            },
            {
                text:'Rent Selected Movies',
                handler: function() {
                    var selectedMovies = [];
                    var grid = this.up('grid');
                    var selectedRecords = grid.getSelectionModel().getSelection();
                    Ext.each(selectedRecords, function(record) {
                        selectedMovies.push(record.get('MovieId'));
                    });
                    var customerId = grid.down('#customerIdField').getValue();
                    console.log('Customer ID:', customerId);
                    console.log(selectedMovies);

                    var store = grid.getStore();

                    var rentalRequest = Ext.create('moviesRentalApp.model.RentalRequest', {
                        CustomerId: customerId,
                        MovieIds: selectedMovies
                    })
                    
                    store.add(rentalRequest);
                    store.reload();
                    store.sync({
                        
                        success: function() {
                            Ext.Msg.alert('Success','Movies rented successfully!');
                            console.log('Request sent successfully');
                        },
                        failure: function(batch, options) {
                            Ext.Msg.alert('Error', 'Failed to rent movies.')
                            console.log('Error while sending request:', batch.exceptions[0].getError());
                        }
                    });
                }
            },
            {
                xtype: 'textfield',
                emptyText: 'Search by Title...',
                enableKeyEvents: true,
                listeners: {
                    /*change: function(field, newValue, oldValue) {
                        var store = field.up('grid').getStore();
                        var filters = store.getFilters();
                        var filter = new Ext.util.Filter({
                            property: 'Title', // Set the property to filter on
                            value: newValue // Set the value to filter for
                        });
                        filters.clear(); // Remove any existing filters
                        filters.add(filter); // Add the new filter
                        store.loadPage(1); // Load the first page of the filtered data
                    }*/
                
                    change: function(field, newValue, oldValue) {
                        var store = field.up('grid').getStore();
                        store.getProxy().setExtraParams({filter:newValue})
                        store.loadPage(1);
                        //store.reload();
                }
                

            }
            }
        ],

        columns:[
            
        { text: 'ID', dataIndex: 'MovieId', width: 50 },
        { text: 'Title', dataIndex: 'Title', flex: 1 },
        { text: 'Description', dataIndex: 'Description', flex: 2 },
        { text: 'Genre', dataIndex: 'Genre', flex: 1 },
        { text: 'Release Date', dataIndex: 'ReleaseDate', flex: 1 }
        ]
    }]

});