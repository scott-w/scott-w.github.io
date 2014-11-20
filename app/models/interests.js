var Backbone = require('backbone');


var _url = 'https://api.github.com/repos/scott-w/scott-w.github.io/contents/';


/** The interests model pulls the list of my interests from a specified markdown
* file. Using this strategy makes it easier for me to update the data, without
* delving into the source code itself to modify everything.
*/
var Interests = Backbone.Model.extend({
  url: _url + 'static/data/interests.md',

  /** Take the github response and just take the content. The Github API returns
  * the content as base64, so use the atob function to get the markdown string
  * back.
  */
  parse: function(response, options) {
    var content = response.content;
    return {
      text: content ? atob(response.content) : ''
    };
  }
});


module.exports = Interests;
