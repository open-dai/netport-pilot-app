/*global define*/

define([
    'backbone',
    'templates',
    'leaflet',
    'models/map'
], function (Backbone, JST, L, MapModel) {
    'use strict';

    /*var myIcon = L.icon({
        iconUrl: 'images/marker-icon.png',
        iconRetinaUrl: 'images/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [2, -41],
        shadowUrl: 'images/marker-shadow.png',
        shadowRetinaUrl: 'images/marker-shadow-2x.png',
        shadowSize: [25, 41],
        shadowAnchor: [7, 41]
    });*/

    var MapView = Backbone.View.extend({
        template: JST['app/scripts/templates/map.hbs'],
        el: '.map-container',
        model: MapModel,
        events: {

        },
        initialize: function () {
            this.$el.html(this.template());
            //this.render();
        },

        render: function () {
            if(this.collection) {
                this.map = new MapModel({zoomlevel: 14});

                var map = this.map.get('map');

                $.each(this.collection.toJSON(), function(i, item){
                    var marker = new L.Marker([item.lat, item.lng]);
                    marker.bindPopup(item.description);
                    marker.addTo(map);
                });

            } else {
                this.map = new MapModel({coords: [this.model.get('lat'), this.model.get('lng')], zoomlevel: this.model.get('zoomlevel'), dragging: false});
                var marker = new L.Marker([this.model.get('lat'), this.model.get('lng')]);
                marker.bindPopup(this.model.get('description'));
                marker.addTo(this.map.get('map'));
            }

        },

        addMarker: function() {

        }


    });

    return MapView;
});
