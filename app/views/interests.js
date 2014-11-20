var Backbone = require('backbone');
var markdown = require('markdown').markdown;


var InterestsView = Backbone.Marionette.LayoutView.extend({
  template: require('../templates/interests.html'),

  templateHelpers: {
    markdown: markdown.toHTML
  }
});


module.exports = InterestsView;
