var Backbone = require('backbone');
var IndexView = require('./views/home');
var InterestView = require('./views/interests');


var Controller = Backbone.Marionette.Controller.extend({
  initialize: function(options) {
    this.app = options.app;
    this.collection = options.collection;
  },

  home: function() {
    this.app.main.show(new IndexView())
    this._setActive('');
  },

  interests: function() {
    this.app.main.show(new InterestView())
    this._setActive('interests');
  },

  _setActive: function(href) {
    var newActive = this.collection.findWhere({href: href});
    var oldActive = this.collection.findWhere({active: true});

    if (oldActive.get('href') != newActive.get('href')) {
      newActive.set('active', true);
      oldActive.set('active', false);
    }
  }
});


var Router = Backbone.Marionette.AppRouter.extend({
  initialize: function(options) {
    this.controller = new Controller(options);
  },

  appRoutes: {
    '': 'home',
    'interests': 'interests'
  }
});


module.exports = Router;
