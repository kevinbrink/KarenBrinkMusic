define("ghost/helpers/gh-format-markdown", 
  ["ghost/utils/caja-sanitizers","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    /* global Showdown, html_sanitize*/
    var cajaSanitizers = __dependency1__["default"];

    var showdown,
        formatMarkdown;

    showdown = new Showdown.converter({extensions: ['ghostimagepreview', 'ghostgfm', 'footnotes', 'highlight']});

    formatMarkdown = Ember.HTMLBars.makeBoundHelper(function (arr /* hashParams */) {
        if (!arr || !arr.length) {
            return;
        }

        var escapedhtml = '',
            markdown = arr[0] || '';

        // convert markdown to HTML
        escapedhtml = showdown.makeHtml(markdown);

        // replace script and iFrame
        escapedhtml = escapedhtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            '<pre class="js-embed-placeholder">Embedded JavaScript</pre>');
        escapedhtml = escapedhtml.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
            '<pre class="iframe-embed-placeholder">Embedded iFrame</pre>');

        // sanitize html
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        escapedhtml = html_sanitize(escapedhtml, cajaSanitizers.url, cajaSanitizers.id);
        // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

        return Ember.String.htmlSafe(escapedhtml);
    });

    __exports__["default"] = formatMarkdown;
  });