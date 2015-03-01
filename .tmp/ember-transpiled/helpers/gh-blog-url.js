define("ghost/helpers/gh-blog-url", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var blogUrl = Ember.HTMLBars.makeBoundHelper(function () {
        return Ember.String.htmlSafe(this.get('config.blogUrl'));
    });

    __exports__["default"] = blogUrl;
  });