define(['backbone', 'models/type'], function(Backbone, TypesModel){
    'use strict';
    var Collection = Backbone.Collection.extend({
        model: TypesModel,
        url: 'http://0.0.0.0:8888/api/types',
        parse: function(response) {
            return response;
        },
        initialize: function(){
            this.bind('request', this.ajaxStart, this);
            this.bind('sync', this.ajaxComplete, this);
        },

        ajaxStart: function() {
            $('.content').html('<div class="text-center"><i class="fa fa-cog fa-spin fa-5x"></i></div>');
        },

        ajaxComplete: function() {
            
        }
    });

    return new Collection();
});