scott-w.github.io
=================

The source code to my simple personal website.

To build the site, run:
```
cd app
npm install -g browserify
npm install
browserify app.js -t node-underscorify ../static/js/app.js
```

And access the page using localhost.
