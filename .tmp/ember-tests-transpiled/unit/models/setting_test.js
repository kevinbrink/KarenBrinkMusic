define("ghost/tests/unit/models/setting_test", 
  ["ember-mocha"],
  function(__dependency1__) {
    "use strict";
    var describeModel = __dependency1__.describeModel;
    var it = __dependency1__.it;

    describeModel('setting', function () {
        it('has a validation type of "setting"', function () {
            var model = this.subject();

            expect(model.get('validationType')).to.equal('setting');
        });
    });
  });