var Backbone = require('backbone');


var Controller = Backbone.Marionette.Controller.extend({
  home: function() {
    var links = Backbone.Wreqr.radio.channel('link');
    links.vent.trigger('clicked', 'home');
  },

  interests: function() {
    var links = Backbone.Wreqr.radio.channel('link');
    links.vent.trigger('clicked', 'interests');
  }
});


var Router = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    '': 'home',
    'interests': 'interests'
  },

  controller: new Controller()
});


module.exports = Router;
