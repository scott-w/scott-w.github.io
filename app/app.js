window._ = require('underscore'); // Backbone can't see it otherwise

var Backbone = require('backbone');
Backbone.$ = window.$; // Use the jQuery from the script tag
Backbone.Marionette = require('backbone.marionette');

var Nav = require('./collections/nav');
var NavView = require('./views/nav');

var Router = require('./router');

var App = new Backbone.Marionette.Application();


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
