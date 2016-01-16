var Backbone = require('backbone');
var Marionette = require('backbone.marionette');

var Nav = require('./collections/nav');
var NavView = require('./views/nav');

var Router = require('./router');

var App = new Marionette.Application();


/** Our base initializer. The role of this is to get the Router up and running,
* so it can render our views as soon as possible.
* We want to avoid as much view management as possible here, otherwise we have
* a convoluted process to clean up what happens in the router and what happens
* at the initializer.
*/
App.addInitializer(function(options) {
  var regions = {
    title: 'title',
    navbar: '#navigation',
    main: '#main'
  };

  this.addRegions(regions);

  var nav = new Nav([
    {name: 'Home', active: true, href: ''},
    {name: 'Interests', href: 'interests'}
  ]);

  var router = new Router({app: this, collection: nav});
  var navView = new NavView({collection: nav});

  this.navbar.show(navView);

  Backbone.history.start();
});

App.start();
