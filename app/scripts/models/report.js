define([
    'backbone'
],
function(Backbone) {
    'use strict';
    var ReportModel = Backbone.Model.extend({
        url: 'http://0.0.0.0:8888/api/reports'
    });

    return ReportModel;

});