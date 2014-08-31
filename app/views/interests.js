var Backbone = require('backbone');
var markdown = require('markdown').markdown;

var Interests = require('../collections/interests');


var Item = Backbone.Marionette.ItemView.extend({
  tagName: 'li',
  template: require('../templates/interest_item.html'),

  templateHelpers: {
    markdown: markdown.toHTML
  }
});

var InterestsView = Backbone.Marionette.CompositeView.extend({
  initialize: function() {
    this.collection = new Interests([
      {
        text: 'Cycling - I recently completed the ' +
        '[C2C](https://justgiving.com/pebble-c2c14)'
      },
      {
        text: 'Building JavaScript apps'
      },
      {
        text: 'Python/Django web apps'
      },
      {
        text: "I am currently reading Robert Jordan's Wheel of Time series"
      }
    ]);
  },

  childView: Item,
  childViewContainer: 'ul',

  template: require('../templates/interests.html')
});


module.exports = InterestsView;
