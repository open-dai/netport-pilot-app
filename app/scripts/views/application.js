/*global define*/

define([
    'backbone',
    'templates'
], function (Backbone, JST) {
    'use strict';

    var View = {};

    View.Application = Backbone.View.extend({
        template: JST['app/scripts/templates/application.hbs'],
        el: '.application',
        slug: 'application',

        initialize: function () {
            //this.render();
        },

        render: function () {
            console.log('Rendering Application');
            this.$el.html(this.template());
            this.$el.data('view', this.slug);

            var titlebarView = new View.Titlebar();
            titlebarView.render();
            var menubarView = new View.Menubar();
            menubarView.render();
        }

    });

    View.Titlebar = Backbone.View.extend({
        template: JST['app/scripts/templates/titlebar.hbs'],
        el: '.titlebar',

        initialize: function() {
            //this.render();
        },

        render: function() {
            console.log('Rendering Titlebar');
            this.$el.html(this.template());

            $('.titlebar-action', this.$el).on('click', function() {
                Backbone.history.navigate('logout', true);
            })
        }

    });

    View.Menubar = Backbone.View.extend({
        template: JST['app/scripts/templates/menubar.hbs'],
        el: '.menubar',
        events: {
            'click li': 'change'
        },

        initialize: function() {
            //this.render();
        },

        render: function() {
            console.log('Rendering Menubar');
            this.$el.html(this.template());
        },

        change: function(e) {
            $(e.currentTarget).addClass('active').siblings().removeClass('active');
        }

    });

    return View;
});
