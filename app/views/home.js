var Backbone = require('backbone');


var HomeView = Backbone.Marionette.ItemView.extend({
  template: require('../templates/home.html')
});


module.exports = HomeView;
