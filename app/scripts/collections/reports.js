define(['backbone', 'models/report'], function(Backbone, ReportModel){
    'use strict';
    var Collection = Backbone.Collection.extend({
        model: ReportModel,
        url: 'http://0.0.0.0:8888/api/reports',
        parse: function(response) {
            return response.reports;
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
