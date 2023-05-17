Ext.define('moviesRentalApp.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',
    storeId:'storemovies',
    model: 'moviesRentalApp.model.Movie',
    autoGenId:false,
    idProperty:'MovieId',
    pageSize:5,
    remoteSort: true,
    remoteFilter: true,
    filters:[],
    //autoSync:false,
    autoLoad:true,

    requires: [
        'moviesRentalApp.model.Movie'
    ],

    
    

    proxy: {
        type: 'rest',
        //url: 'https://localhost:44376/api/Movies',
        api: {
            create: 'https://localhost:44376/api/Movies',
            read: 'https://localhost:44376/api/Movies',
            update: 'https://localhost:44376/api/Movies',
            destroy: 'https://localhost:44376/api/Movies'
        },
        reader: {
            type: 'json',   
            rootProperty:'data',
            totalProperty:'total'
        },
        writer: {
            type: 'json',
            writeAllFields: false,
            transform: function (data, request) {
                // Remove the MovieId field from the request body for create requests
                if (request.getAction() === 'create') {
                    delete data.MovieId;
                    request.setParam({});
                }

                return data;
            }
        },

        
        
        

        listeners: {
            exception: function(proxy, response, operation) {
                console.log('Error', operation.getError());
                console.log('Error', response);
            }
        }
    },

    
});