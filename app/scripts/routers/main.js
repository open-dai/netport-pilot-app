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
    'views/user',
    'views/settings',
    'facebook'
], function(Backbone, ReportCollection, TypesCollection, ReportModel, UserModel, ApplicationView, IndexView, ReportsView, MapView, CreateView, UserView, SettingsView, FB){
    'use strict';
    var router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'reports': 'reports',
            'reports/:id': 'reports',
            'map': 'map',
            'create': 'create',
            'user': 'user',
            'settings': 'settings',
            'login': 'login',
            'logout': 'logout'
        },
        initialize: function() {
            var applicationView = new ApplicationView.Application();
            applicationView.render();
            //this.bind('all', this.change);
        },

        index: function() {
            console.log('index');
            var index = new IndexView();
            index.render();
        },

        login: function() {
            FB.login();
        },

        logout: function() {
            FB.logout();
        },

        create: function() {
            console.log('create');
            TypesCollection.fetch({success: function(){
                var createview = new CreateView({collection: TypesCollection});
                createview.render();
            }, error: function(){

            }});

        },

        user: function() {
            var userview = new UserView({model: UserModel});
            userview.render();
        },

        settings: function() {
            var settingsView = new SettingsView();
            settingsView.render();
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

        map: function() {
            console.log('map');
        }
    });

    return router;
});
