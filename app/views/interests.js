var Backbone = require('backbone');


var InterestsView = Backbone.Marionette.ItemView.extend({
  template: require('../templates/interests.html')
});


module.exports = InterestsView;
