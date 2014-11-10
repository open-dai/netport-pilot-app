define([
    'backbone',
    'collections/reports',
    'collections/types',
    'models/report',
    'models/user',
    'views/application',
    'views/index',
    'views/reports',
    'views/map',
    'views/create',
    'views/nearby',
    'facebook'
], function (Backbone, ReportCollection, TypesCollection, ReportModel, UserModel, ApplicationView, IndexView, ReportsView, MapView, CreateView, NearbyView, FB) {
    'use strict';
    var router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'reports': 'reports',
            'reports/:id': 'reports',
            'map': 'map',
            'create': 'create',
            'saved': 'saved',
            'user': 'user',
            'settings': 'settings',
            'login': 'login',
            'logout': 'logout',
            'nearby': 'nearby'
        },
        initialize: function() {
            var applicationView = new ApplicationView.Application();
            applicationView.render();
        },

        index: function() {
            var index = new IndexView();
            index.render();
        },

        login: function() {
            FB.login(function() {
                $('.hidden-loggedout').show();
                $('.hidden-loggedin').hide();
                Backbone.history.navigate('reports', true);
            });
        },

        logout: function() {
            FB.logout(function() {
                $('.hidden-loggedout').hide();
                $('.hidden-loggedin').show();
                Backbone.history.navigate('/', true);
            });
        },

        create: function() {
            TypesCollection.fetch({success: function(){
                var createview = new CreateView({collection: TypesCollection});
                createview.render();
            }, error: function(){

            }});

        },

        reports: function(id) {
            ReportCollection.fetch({success: function(){
                TypesCollection.fetch({success: function(){
                    if(id) {
                        var report = new ReportsView.Single({model: ReportCollection.get(id)});
                        report.render();
                    } else {
                        var reports = new ReportsView.List({collection: ReportCollection});
                        reports.render();
                    }
                }, error: function(err){
                    console.log(err);
                }});
            }, error: function(err){
                console.log(err);
            }});
        },

        nearby: function() {
            console.log('nearby');
            ReportCollection.fetch({success: function(){
                var nearbyView = new NearbyView({collection: ReportCollection});
                nearbyView.render();
            }, error: function(err){
                console.log(err);
            }});
        }
    });

    return router;
});
