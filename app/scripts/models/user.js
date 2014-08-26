/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var UserModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
        }
    });

    return new UserModel();
});
