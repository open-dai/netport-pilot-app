define([
    'backbone'
],
function(Backbone) {
    'use strict';
    var ReportModel = Backbone.Model.extend({
        url: 'http://172.16.199.159:8888/api/reports'
    });

    return ReportModel;

});