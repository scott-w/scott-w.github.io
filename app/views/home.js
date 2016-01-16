var Marionette = require('backbone.marionette');


var HomeView = Marionette.ItemView.extend({
  template: require('../templates/home.html')
});


module.exports = HomeView;
