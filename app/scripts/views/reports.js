/*global define*/

define([
    'backbone',
    'templates',
    'views/map'
], function (Backbone, JST, MapView) {
    'use strict';

    var Reports = {};

    Reports.List = Backbone.View.extend({
        template: JST['app/scripts/templates/reports.hbs'],
        el: '.main',
        title: 'Senaste',
        events: {

        },
        initialize: function () {
            //this.render();
        },

        render: function () {
            $('.navbar-text').html(this.title);
            this.$el.html(this.template({reports: this.collection.toJSON()}));
        }
    });

    Reports.Single = Backbone.View.extend({
        template: JST['app/scripts/templates/report.hbs'],
        el: '.main',
        events: {

        },
        initialize: function() {
            //this.render();
        },

        render: function() {
            $('.navbar-text').html(this.model.get('type'));
            this.$el.html(this.template(this.model.toJSON()));
            this.model.set('zoom', 18);
            this.model.set('scrollWheelZoom', false);
            var map = new MapView({model: this.model});
            map.render();
        }
    });

    return Reports;
});
