Ext.define('moviesRentalApp.view.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',
    id: 'moviegridId',
    
    requires: [
        'moviesRentalApp.viewmodel.MovieViewModel',
        'moviesRentalApp.store.Movies'
    ],
    controller:'main',

    viewModel:{
        type:'movie'
    },

    

    //type: 'movie',
    
    title: 'Movies',
    bind:{
        store: '{movies}'
    },

    listeners: {
        afterrender: function() {
            var store = this.getViewModel().getStore('movies');
            store.load();
            console.log(store);
        },

    },
    initComponent: function() {
        
        this.callParent(arguments);
        
    },
    /*initComponent: function() {
        this.callParent(arguments);

        var store = this.getViewModel().getStore('movies');
        store.load();
        /*var me = this;
        me.store = Ext.create('moviesRentalApp.store.Movies');
        me.store.load();
        me.callParent();

        store:{
        type:'movies'
    },
    }*/
    
    

    selModel: {
        selType:'rowmodel'
    },

    
    listeners:{
        

        select: function(grid, record, index, eOpts) {
            var window = Ext.create('moviesRentalApp.view.UpdateMovieFormWindow', {
                listeners: {
                    show: function() {
                        var viewmodel = this.lookupViewModel();
                        viewmodel.set('clickedMovie', record.getData());
                    }   
                }
            });
            window.show();
            },


    },

    columns: [
        { text: 'ID', dataIndex: 'MovieId', width: 50 },
        { text: 'Title', dataIndex: 'Title', flex: 1 },
        { text: 'Description', dataIndex: 'Description', flex: 2 },
        { text: 'Genre', dataIndex: 'Genre', flex: 1 },
        { text: 'Release Date', dataIndex: 'ReleaseDate', flex: 1 }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        
        displayInfo: true,
        displayMsg: 'Displaying {0} - {1} of {2}',
        emptyMsg: 'No data to display',
    },
    tbar:[
        {
            text:'Add New Movie',
            handler:'onAddMovieClick'
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
            /*listeners: {
                keyup: function (field) {
                    var store = field.up('grid').getStore();
                    var value = field.getValue();
                    store.clearFilter();
                    if (value) {
                        store.filter({
                            property: 'Title',  // replace with the name of the field to filter on
                            anyMatch: true,
                            caseSensitive: false,
                            value: value
                        });
                    }
                }
            }*/
        },
        {
            xtype:'tbtext',
            text:'Click on a record to Update/Delete'
        }
        
    ],
    
});

