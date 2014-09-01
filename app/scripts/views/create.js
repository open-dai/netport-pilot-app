/*global define*/

define([
    'backbone',
    'templates',
    'views/map',
    'models/report'
], function (Backbone, JST, MapView, ReportModel) {
    'use strict';

    var CreateView = Backbone.View.extend({
        template: JST['app/scripts/templates/create.hbs'],
        el: '.content',
        //model: new ReportModel(),
        events: {
            'click .save': 'save'
        },
        initialize: function () {
            //this.render();
            //this.model.url = 'http://172.16.199.159:8888/api/reports';
        },

        render: function () {
            var that = this;

            $('.content').html('<div class="text-center"><i class="fa fa-cog fa-spin fa-5x"></i></div>');
            navigator.geolocation.getCurrentPosition(function(position){
                var tempReport = new ReportModel();

                
                tempReport.set('lat', position.coords.latitude);
                tempReport.set('lng', position.coords.longitude);
                tempReport.set('zoomlevel', 18);
                var data = {};
                data.model = tempReport.toJSON();
                data.types = that.collection.toJSON();

                that.$el.html(that.template(data));
                var map = new MapView({model: tempReport});
                map.render();
            });
            
        },

        save: function() {
            var report = new ReportModel();
            report.set('type_id', $('#type').val() );
            report.set('image', $(':input[type="file"]')[0].files[0] );
            report.set('description', $('#description').val() );
            
            report.save({success: function(){
                console.log('saved');
            }, error: function(err){
                console.log('something went wrong: '+err);
            }});
        }
    });

    return CreateView;
});
