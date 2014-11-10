/*global define*/

define([
    'backbone',
    'templates',
    'views/map',
    'models/report',
    'models/user'
], function (Backbone, JST, MapView, ReportModel, UserModel) {
    'use strict';

    var CreateView = Backbone.View.extend({
        template: JST['app/scripts/templates/create.hbs'],
        el: '.main',
        slug: 'create',
        title: 'Rapportera',
        model: new ReportModel(),
        events: {
            'click .save': 'saveFile'
        },
        initialize: function () {
        },

        render: function () {
            $('.navbar-text').html(this.title);
            var that = this;

            $('body').append('<div class="loader fa-stack fa-3x"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-cog fa-spin fa-stack-1x fa-inverse"></i></div>');

            navigator.geolocation.getCurrentPosition(function(position){
                that.model.set('lat', position.coords.latitude);
                that.model.set('lng', position.coords.longitude);
                that.model.set('zoomlevel', 18);
                var data = {};
                data.model = that.model.toJSON();
                data.types = that.collection.toJSON();

                that.$el.html(that.template(data));
                that.$el.data('view', that.slug);

                var map = new MapView({model: that.model});
                map.render();
                $('.loader', 'body').remove();
            });
        },

        saveFile: function() {
            event.preventDefault();

            var picture = $('input')[0].files[0];
            var data = new FormData();
            data.append('type_id', $('#type').val());
            data.append('description', $('#description').val());
            data.append('file', picture);
            data.append('fb_id', UserModel.get('id'));
            data.append('lat', this.model.get('lat'));
            data.append('lng', this.model.get('lng'));

            $.ajax({
                url: apiReportsUri,
                data: data,
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                success: function() {
                    console.log('file uploaded');
                    Backbone.history.navigate('reports', {trigger:true});
                },
                error: function(data) {
                    console.log(data);
                }
            });

        }
    });

    return CreateView;
});
