var Backbone = require('backbone');


var _url = 'https://api.github.com/repos/scott-w/scott-w.github.io/contents/';


var Interests = Backbone.Model.extend({
  url: _url + 'static/data/interests.md',

  parse: function(response, options) {
    debugger;
    return {
      text: btoa(response.content)
    };
  }
});


module.exports = Interests;
