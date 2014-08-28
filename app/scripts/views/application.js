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

        initialize: function () {
            //this.render();
        },

        render: function () {
            console.log('Rendering Application');
            this.$el.html(this.template());
            var bannerView = new View.Banner();
            bannerView.render();
            var contentInfoView = new View.ContentInfo();
            contentInfoView.render();
        }

    });

    View.Banner = Backbone.View.extend({
        template: JST['app/scripts/templates/banner.hbs'],
        el: '.banner',
        events: {
            'click li': 'change'
        },

        initialize: function() {
            //this.render();
        },

        render: function() {
            console.log('Rendering Banner');
            this.$el.html(this.template());
        },

        change: function(e) {
            $(e.currentTarget).addClass('active').siblings().removeClass('active');
        }

    });

    View.ContentInfo = Backbone.View.extend({
        template: JST['app/scripts/templates/contentinfo.hbs'],
        el: '.contentinfo',
        initialize: function() {
            //this.render();
        },

        render: function() {
            console.log('Rendering ContentInfo');
            this.$el.html(this.template());
        }
    });

    return View;
});
