/*global define*/

define([
    'backbone',
    'templates',
    'models/user',
    'collections/reports',
    'facebook'
], function (Backbone, JST, UserModel, ReportCollection, FB) {
    'use strict';

    var UserView = Backbone.View.extend({
        template: JST['app/scripts/templates/user.hbs'],
        el: '.content',
        model: UserModel,
        events: {
            'click .logout': 'logout'
        },

        initialize: function () {
            //this.render();
        },

        render: function () {
            var that = this;
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {

                    FB.api('/me', function(response){
                        UserModel.set(response);
                        FB.api('/me', {fields: 'picture'}, function(response){
                            UserModel.set('pic', response.picture.data.url);
                            var reports = ReportCollection.where({fbId: UserModel.get('id')});
                            that.model.set('reports', reports);
                            that.$el.html(that.template(that.model.toJSON()));
                        });
                    });
                }
            });
            
        },

        logout: function() {
            FB.logout(function(response) {
                // user is now logged out
                console.log(response);
            });
        }
    });

    return UserView;
});
