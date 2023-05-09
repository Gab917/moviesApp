Ext.define('moviesRentalApp.view.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',
    id: 'moviegridId',
    
    requires: [
        'moviesRentalApp.viewmodel.MovieViewModel',
        'moviesRentalApp.store.Movies'
    ],
    controller:'main',

    viewmodel: {
        type: 'movie'
    },

    

    //type: 'movie',

    title: 'Movies',
    store: {
        type: 'movies',
        
    },

    selModel: {
        selType:'rowmodel'
    },

    
    listeners:{
        /*selectionchange:function(grid, selected, eOpts) {
            var gridCmp = Ext.getCmp('moviegridId');
            var vm = gridCmp.lookupViewModel();
            var clickedMovie = selected[0];
            if(clickedMovie){
                vm.set('clickedMovie', selected[0]);
                console.log(selected[0]);
                //vm.setData(clickedMovie.getData());
                //console.log('clickedMovie.getData()',clickedMovie.getData());
                console.log('clickedMovie in ViewModel',vm.get('clickedMovie'));
                var window = Ext.create('moviesRentalApp.view.UpdateMovieFormWindow');
                window.show();
            }

        }*/

        /*selectionchange: function(grid,selected,eOpts) {
            var window = Ext.create('moviesRentalApp.view.UpdateMovieFormWindow', {
                listeners: {
                    show: function() {
                        var viewmodel = this.lookupViewModel();
                        viewmodel.set('clickedMovie', selected[0]);
                    }
                }
            });
            window.show();
        },*/

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

        afterrender: function(grid) {
            grid.getStore().on('load', function() {
                grid.getView().refresh();
            });
        }

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
            text:'Delete Movie',
            handler: 'onDeleteMovieClick'
        },
        {
            xtype: 'textfield',
            emptyText: 'Search by Title...',
            enableKeyEvents: true,
            listeners: {
                change: function(field, newValue, oldValue) {
                    var store = field.up('grid').getStore();
                    var filters = store.getFilters();
                    var filter = new Ext.util.Filter({
                        property: 'Title', // Set the property to filter on
                        value: newValue // Set the value to filter for
                    });
                    filters.clear(); // Remove any existing filters
                    filters.add(filter); // Add the new filter
                    store.loadPage(1); // Load the first page of the filtered data
                }
                /*
                change: function(field, newValue, oldValue) {
                    var store = field.up('grid').getStore();
                    store.getProxy().setExtraParams({filter:newValue})
                    store.loadPage(1);
                    //store.reload();
                }
                */

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

