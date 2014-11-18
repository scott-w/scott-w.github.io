var Backbone = require('backbone');


var NavItem = Backbone.Marionette.ItemView.extend({
  modelEvents: {
    'change:active': 'render'
  },

  ui: {
    link: 'a'
  },

  tagName: 'li',
  template: require('../templates/nav_item.html'),

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

  template: require('../templates/nav.html')
});


module.exports = NavView;
