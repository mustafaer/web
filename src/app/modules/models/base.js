define(function (require, exports, module) {
  var Backbone = require('backbone');

  module.exports = Backbone.Model.extend({
    getApiUrl: function () {
      return window.apiUrl;
    },
    parse: function (response, options) {
      if (options.collection) {
        return response;
      } else {
        return response.data;
      }
    }
  });
});
