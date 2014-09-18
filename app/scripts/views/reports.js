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
        slug: 'reports',
        title: 'Senaste',
        events: {

        },
        initialize: function () {
            //this.render();
        },

        render: function () {
            $('.navbar-text').html(this.title);

            this.$el.html(this.template({reports: this.collection.toJSON()}));
            this.$el.data('view', this.slug);
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
            this.model.set('zoom', 18);
            this.model.set('scrollWheelZoom', false);
            this.model.set('dragging', false);
            this.$el.html(this.template(this.model.toJSON()));
            var map = new MapView({model: this.model});
            map.render();
        }
    });

    return Reports;
});
