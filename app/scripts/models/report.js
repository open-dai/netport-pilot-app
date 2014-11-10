define([
    'backbone'
],
function(Backbone) {
    'use strict';
    var ReportModel = Backbone.Model.extend({
        url: $.env.apiReportsUri
    });

    return ReportModel;

});
