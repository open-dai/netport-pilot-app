/*global define*/

define([
    'backbone',
    'templates',
    'leaflet',
    'models/map'
], function (Backbone, JST, L, MapModel) {
    'use strict';

    var NearbyView = Backbone.View.extend({
        template: JST['app/scripts/templates/nearby.hbs'],
        el: '.main',
        slug: 'nearby',
        title: 'Nära',
        model: MapModel,
        events: { },

        initialize: function () {
            //this.render();
        },

        render: function () {
            $('.navbar-text').html(this.title);

            this.$el.html(this.template());
            this.$el.data('view', this.slug);

            this.map = new MapModel({zoomlevel: 14, scrollWheelZoom: false});
            var map = this.map.get('map');

            $.each(this.collection.toJSON(), function(i, item){
                var marker = new L.Marker([item.lat, item.lng]);
                marker.bindPopup(item.description);
                marker.addTo(map);
            });
        }
    });

    return NearbyView;
});
