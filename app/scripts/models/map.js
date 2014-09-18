/*global define*/

define([
    'backbone',
    'leaflet'
], function (Backbone, L) {
    'use strict';

    var MapModel = Backbone.Model.extend({
        defaults: {
            coords: [56.169401778813686, 14.864437580108644],
            zoomlevel: 16,
            dragging: false,
            scrollWheelZoom: false,
            touchZoom: false,

        },

        initialize: function() {

            var options = this.toJSON();
            this.set({
                map: L.map('map', options).setView(this.get('coords'), this.get('zoomlevel'))
            });

            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.get('map'));

        }
    });

    return MapModel;
});
