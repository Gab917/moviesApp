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
        autoLoad: true,
        
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

        selectionchange: function(grid,selected,eOpts) {
            var window = Ext.create('moviesRentalApp.view.UpdateMovieFormWindow', {
                listeners: {
                    show: function() {
                        var vm = this.lookupViewModel();
                        vm.set('clickedMovie', selected[0].getData());
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
        pageSize: 10
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
            }
        },
        {
            xtype:'tbtext',
            text:'Click on a record to Update/Delete'
        }
        
    ],
    
});

