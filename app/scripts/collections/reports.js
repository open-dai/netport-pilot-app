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
            $('.content').html('<div class="text-center"><i class="fa fa-cog fa-spin fa-5x"></i></div>');
        },

        ajaxComplete: function() {
            
        }
    });

    return new Collection();
});