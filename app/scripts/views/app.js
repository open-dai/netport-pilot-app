/*global define*/

define([
    'backbone',
    'templates'
], function (Backbone, JST) {
    'use strict';

    var View = {};

    View.App = Backbone.View.extend({
        template: JST['app/scripts/templates/app.hbs'],
        el: '.app',

        initialize: function () {
            //this.render();
        },

        render: function () {
            console.log('rendering app');
            this.$el.html(this.template());
            var header = new View.Header();
            header.render();
            var footer = new View.Footer();
            footer.render();
        }

    });

    View.Header = Backbone.View.extend({
        template: JST['app/scripts/templates/header.hbs'],
        el: '.header',
        events: {
            'click li': 'change'
        },

        initialize: function() {
            //this.render();
        },

        render: function() {
            console.log('rendering header');
            this.$el.html(this.template());
        },

        change: function(e) {
            $(e.currentTarget).addClass('active').siblings().removeClass('active');
        }

    });

    View.Footer = Backbone.View.extend({
        template: JST['app/scripts/templates/footer.hbs'],
        el: '.footer',
        initialize: function() {
            //this.render();
        },

        render: function() {
            console.log('rendering footer');
            this.$el.html(this.template());
        }
    });

    return View;
});
