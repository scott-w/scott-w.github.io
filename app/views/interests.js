var Backbone = require('backbone');
var markdown = require('markdown').markdown;


/** We render the model if necessary. We use a LayoutView here out of habit.
 * Making everything a LayoutView gives us access to the region hash if we want
 * to use it later.
 */
var InterestsView = Backbone.Marionette.LayoutView.extend({
  template: require('../templates/interests.html'),

  /** Pre-save the jQuery selector.
   */
  ui: {
    interests: '.interest-hook'
  },

  /** Whenever the fetch completes, re-render this view.
   */
  modelEvents: {
    sync: 'render'
  },

  templateHelpers: {
    /** Lets us access a markdown() function in the template itself.
     * This is the meat of the view, as the model attribute is just a markdown
     * string.
     */
    markdown: function (attribute) {
      if (attribute) {
        return markdown.toHTML(attribute);
      }
      return '';
    }
  },

  /** Called after render() completes. We use this to create the HTML class
   * we need to get the list to render cleanly after markdown renders it.
   */
  onRender: function () {
    this.ui.interests.children('ul').addClass('list-unstyled');
  }
});


module.exports = InterestsView;
