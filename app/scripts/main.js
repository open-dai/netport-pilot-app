/*global require*/
'use strict';

require.config({
    shim: {
        backbone: {
            deps: ['underscore', 'jquery', 'env'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery', 'env'],
            exports: 'jquery'
        },
        handlebars: {
            deps: ['env'],
            exports: 'Handlebars'
        },
        facebook: {
            deps: ['env'],
            exports: 'FB'
        },
        q: {
            deps: ['env'],
            exports: 'Q'
        },
        env: {
            deps: ['jquery']
        }
    },
    paths: {
        env:        'env',
        jquery:     '../bower_components/jquery/dist/jquery',
        backbone:   '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap:  '../bower_components/bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        leaflet:    '../bower_components/leaflet-dist/leaflet',
        facebook:   'http://connect.facebook.net/en_US/all',
        q:          '../bower_components/q/q'
    }
});

require([
    'backbone',
    'routers/main',
    'models/user',
    'facebook',
    'handlebars',
    'bootstrap',
    'env'
], function (Backbone, MainRouter, UserModel, FB, Handlebars) {
    var router = new MainRouter();

    $('.hidden-loggedout').hide();
    $('.hidden-loggedin').show();

    Backbone.history.start();

    FB.init({
        appId      : $.env.fbAppId,
    });

    // This registers a new helper method on the Handlebars template
    Handlebars.registerHelper('formatDate', function(dateString){
        var date = new Date(dateString);
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
    });

    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.api('/me', function(response){
                UserModel.set(response);
                FB.api('/me?fields=picture', function(response){
                    UserModel.set(response.name);
                    $('.hidden-loggedout').show();
                    $('.hidden-loggedin').hide();
                    router.navigate('reports', {trigger: true});
                });
            });
        }
    });

});
