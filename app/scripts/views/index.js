define(['backbone', 'templates'], function(Backbone, JST){
    'use strict';

    var indexView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.hbs'],
        el: '.main',
        initialize: function () {
            //this.render();
        },

        render: function () {
            console.log('rendering layout');
            this.$el.html(this.template());
        }
    });

    return indexView;
});
