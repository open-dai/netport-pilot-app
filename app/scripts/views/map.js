/*global define*/

define([
    'backbone',
    'templates',
    'leaflet',
    'models/map'
], function (Backbone, JST, L, MapModel) {
    'use strict';

    var MapView = Backbone.View.extend({
        template: JST['app/scripts/templates/map.hbs'],
        el: '.map-container',
        slug: 'map',
        model: MapModel,
        events: {

        },
        initialize: function () {
            //this.render();
        },

        render: function () {
            this.$el.data('view', this.slug);
            
            if(this.collection) {
                this.$el.html(this.template());
                var map = new MapModel({dragging: true});

                var mapObject = map.get('map');

                $.each(this.collection.toJSON(), function(i, item){
                    var marker = new L.Marker([item.lat, item.lng]);
                    marker.bindPopup(item.description);
                    marker.addTo(mapObject);
                });

            } else {
                this.$el.html(this.template());
                this.map = new MapModel({coords: [this.model.get('lat'), this.model.get('lng')], zoomlevel: this.model.get('zoomlevel')});
                var marker = new L.Marker([this.model.get('lat'), this.model.get('lng')]);
                marker.bindPopup(this.model.get('description'));
                marker.addTo(this.map.get('map'));
            }

        }


    });

    return MapView;
});
