/*global define*/

define([
    'backbone',
    'templates'
], function (Backbone, JST) {
    'use strict';

    var SettingsView = Backbone.View.extend({
        template: JST['app/scripts/templates/settings.hbs'],
        el: '.main',
        slug: 'settings',
        title: 'Inställningar',
        events: {},

        initialize: function () {
            //this.render();
        },

        render: function () {
            $('.navbar-text').html(this.title);

            this.$el.html(this.template());
            this.$el.data('view', this.slug);
        }
    });

    return SettingsView;
});
