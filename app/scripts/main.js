/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        facebook: {
            exports: 'FB'
        },
        q: {
            exports: 'Q'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars: '../bower_components/handlebars/handlebars',
        leaflet: '../bower_components/leaflet-dist/leaflet',
        facebook: 'http://connect.facebook.net/en_US/all',
        q: '../bower_components/q/q'
    }
});

require([
    'backbone',
    'routers/main',
    'models/user'
], function (Backbone, MainRouter, UserModel) {
    var router = new MainRouter();

    FB.init({
        appId      : '661666163920134',
    });


    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            FB.api('/me', function(response){
                UserModel.set(response);
                FB.api('/me?fields=picture', function(response){
                    UserModel.set(response.name);
                    router.navigate('#reports', {trigger: true});
                });
            });
            
        }
    });

    
    Backbone.history.start();
});
