/*global define*/

define([
    'backbone',
    'templates'
], function (Backbone, JST) {
    'use strict';

    var SettingsView = Backbone.View.extend({
        template: JST['app/scripts/templates/settings.hbs'],
        el: '.content',

        events: {},

        initialize: function () {
            //this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return SettingsView;
});
