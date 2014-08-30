var Backbone = require('backbone');


var NavItem = Backbone.Marionette.ItemView.extend({
  events: {
    'click @ui.link': 'navigate'
  },
  modelEvents: {
    'change:active': 'render'
  },

  ui: {
    link: 'a'
  },

  tagName: 'li',
  template: require('../templates/nav_item.html'),

  navigate: function(event) {
    event.preventDefault();
    var links = Backbone.Wreqr.radio.channel('link');
    
    var href = this.model.get('href') || 'home';
    links.vent.trigger('clicked', href);
  },

  onRender: function() {
    if (this.model.get('active')) {
      this.$el.addClass('active');
    }
    else {
      this.$el.removeClass('active');
    }
  }
});


var NavView = Backbone.Marionette.CompositeView.extend({
  childView: NavItem,
  childViewContainer: 'ul',

  className: 'inner',
  tagName: 'nav',

  template: require('../templates/nav.html'),

  onShow: function() {
    var links = Backbone.Wreqr.radio.channel('link');
    links.vent.on('clicked', this.setHighlight.bind(this));
  },

  /* Sets the highlighted navigation option */
  setHighlight: function(link) {
    var navs = {
      home: '',
      interests: 'interests'
    };

    this.collection.each(function(model) {
      var href = model.get('href') || 'home';
      if (href === link) {
        model.set('active', true);
      }
      else {
        model.set('active', false);
      }
    });
  }
});


module.exports = NavView;
