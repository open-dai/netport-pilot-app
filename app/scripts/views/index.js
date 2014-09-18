define(['backbone', 'templates'], function(Backbone, JST){
    'use strict';

    var indexView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.hbs'],
        el: '.main',
        slug: 'index',
        initialize: function () {
            //this.render();
        },

        render: function () {
            this.$el.html(this.template());
            this.$el.data('view', this.slug);
        }
    });

    return indexView;
});
