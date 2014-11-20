var Backbone = require('backbone');
var IndexView = require('./views/home');
var InterestView = require('./views/interests');
var Interests = require('./models/interests');


/** The main logic that handles movement across screens. The application
* initializer should delegate most of the work here as soon as possible, and let
* the individual views manage themselves.
*/
var Controller = Backbone.Marionette.Controller.extend({

  /** We need the app and collection in options here so we can effectively
  * manage the rendering of the whole page. Using this method means we don't
  * need to manage the Backbone history ourselves because the browser is going
  * to do it all for us.
  */
  initialize: function(options) {
    this.options = {
      app: options.app,
      interests: new Interests({}, {parse: true})
    };
    this.options.interests.fetch();
    this.collection = options.collection;
  },

  /** Displays the homepage.
  */
  home: function() {
    this.options.app.main.show(new IndexView())
    this._setActive('');
  },

  /** Displays the list of interests.
  */
  interests: function() {
    this.options.app.main.show(new InterestView())
    this._setActive('interests');
  },

  /** The main driver function for switching pages. This works by simply
  * flipping the active flag in the collection, if necessary. Because the
  * collection is wired up to the NavView, it will re-render itself
  * automatically.
  */
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
  /** We need this so we can feed the app and collection options through to the
  * controller. We could also expose the controller directly to the application
  * and manage it there if we wished.
  */
  initialize: function(options) {
    this.controller = new Controller(options);
  },

  appRoutes: {
    '': 'home',
    'interests': 'interests'
  }
});


module.exports = Router;
