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