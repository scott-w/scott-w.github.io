var Marionette = require('backbone.marionette');


/** Note the modelEvents, so we can change the underlying model in the router
* and only the affected items will be re-rendered
*/
var NavItem = Marionette.ItemView.extend({
  modelEvents: {
    'change:active': 'render'
  },

  ui: {
    link: 'a'
  },

  tagName: 'li',
  template: require('../templates/nav_item.html'),

  /** We need to use this hook because className and the attributes hash are
  * both calculated once: on DOM creation.
  */
  onBeforeRender: function() {
    if (this.model.get('active')) {
      this.$el.addClass('active');
    }
    else {
      this.$el.removeClass('active');
    }
  }
});


/** Pretty basic CompositeView for the navigation
*/
var NavView = Marionette.CompositeView.extend({
  childView: NavItem,
  childViewContainer: 'ul',

  className: 'inner',
  tagName: 'nav',

  template: require('../templates/nav.html')
});


module.exports = NavView;
