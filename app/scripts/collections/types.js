define(['backbone', 'models/type'], function(Backbone, TypesModel){
    'use strict';
    var Collection = Backbone.Collection.extend({
        model: TypesModel,
        url: $.env.apiReportsUri,
        parse: function(response) {
            return response;
        },
        initialize: function(){
            this.bind('request', this.ajaxStart, this);
            this.bind('sync', this.ajaxComplete, this);
        },

        ajaxStart: function() {
            $('body').append('<div class="loader fa-stack fa-3x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cog fa-spin fa-stack-1x fa-inverse"></i></div>');
        },

        ajaxComplete: function() {
            $('.loader', 'body').remove();
        }
    });

    return new Collection();
});
