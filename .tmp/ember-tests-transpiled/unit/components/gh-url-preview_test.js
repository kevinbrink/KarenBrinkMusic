define("ghost/tests/unit/components/gh-url-preview_test", 
  ["ember-mocha"],
  function(__dependency1__) {
    "use strict";
    /* jshint expr:true */
    var describeComponent = __dependency1__.describeComponent;
    var it = __dependency1__.it;

    describeComponent('gh-url-preview',
        function () {
            it('generates the correct preview URL with a prefix', function () {
                var component = this.subject({
                    prefix: 'tag',
                    slug: 'test-slug',
                    tagName: 'p',
                    classNames: 'test-class',

                    config: {blogUrl: 'http://my-ghost-blog.com'}
                });

                this.render();

                expect(component.get('url')).to.equal('my-ghost-blog.com/tag/test-slug/');
            });

            it('generates the correct preview URL without a prefix', function () {
                var component = this.subject({
                    slug: 'test-slug',
                    tagName: 'p',
                    classNames: 'test-class',

                    config: {blogUrl: 'http://my-ghost-blog.com'}
                });

                this.render();

                expect(component.get('url')).to.equal('my-ghost-blog.com/test-slug/');
            });
        }
    );
  });