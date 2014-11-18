Personal Website
================

The source code to my simple personal website.

To build the site, run:
```
cd app
npm install -g browserify
npm install
browserify app.js -t node-underscorify > ../static/js/app.js
```

And view the page in your browser.


Understanding the Code
-----------------------

The best way to learn the code is to start at `app/app.js` and read the documentation comments.
The initializer sets everything up, with some boilerplate. You can follow the `require()` calls
to each file to get a better idea of how it works.
