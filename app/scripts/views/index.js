define(['backbone', 'templates'], function(Backbone, JST){
    'use strict';

    var indexView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.hbs'],
        el: '.content',
        initialize: function () {
            //this.render();
        },

        render: function () {
            console.log('rendering app');
            this.$el.html(this.template());
        }
    });

    return indexView;
});