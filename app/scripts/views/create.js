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
        model: new ReportModel(),
        events: {
            'click .save': 'save'
        },
        initialize: function () {
            //this.render();
        },

        render: function () {
            //var report = new ReportModel();
            var that = this;

            $('.content').html('<div class="text-center"><i class="fa fa-cog fa-spin fa-5x"></i></div>');
            navigator.geolocation.getCurrentPosition(function(position){
                that.model.set('lat', position.coords.latitude);
                that.model.set('lng', position.coords.longitude);
                that.model.set('zoomlevel', 18);
                var data = {};
                data.model = that.model.toJSON();
                data.types = that.collection.toJSON();

                console.log(data);

                that.$el.html(that.template(data));
                var map = new MapView({model: that.model});
                map.render();
            });
            
        },

        save: function() {
            console.log('Saving: '+this.model.get('description'));
        }
    });

    return CreateView;
});
