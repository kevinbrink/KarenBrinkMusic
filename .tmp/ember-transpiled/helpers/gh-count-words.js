define("ghost/helpers/gh-count-words", 
  ["ghost/utils/word-count","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var counter = __dependency1__["default"];

    var countWords = Ember.HTMLBars.makeBoundHelper(function (arr /* hashParams */) {
        if (!arr || !arr.length) {
            return;
        }

        var markdown,
            count;

        markdown = arr[0] || '';

        if (/^\s*$/.test(markdown)) {
            return '0 words';
        }

        count = counter(markdown);

        return count + (count === 1 ? ' word' : ' words');
    });

    __exports__["default"] = countWords;
  });