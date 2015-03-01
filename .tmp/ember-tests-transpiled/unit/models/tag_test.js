define("ghost/tests/unit/models/tag_test", 
  ["ember-mocha"],
  function(__dependency1__) {
    "use strict";
    var describeModel = __dependency1__.describeModel;
    var it = __dependency1__.it;

    describeModel('tag', function () {
        it('has a validation type of "tag"', function () {
            var model = this.subject();

            expect(model.get('validationType')).to.equal('tag');
        });
    });
  });