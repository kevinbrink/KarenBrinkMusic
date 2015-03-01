define("ghost/tests/unit/models/role_test", 
  ["ember-mocha"],
  function(__dependency1__) {
    "use strict";
    var describeModel = __dependency1__.describeModel;
    var it = __dependency1__.it;

    describeModel('role', function () {
        it('provides a lowercase version of the name', function () {
            var model = this.subject({
                name: 'Author'
            });

            expect(model.get('name')).to.equal('Author');
            expect(model.get('lowerCaseName')).to.equal('author');

            Ember.run(function () {
                model.set('name', 'Editor');

                expect(model.get('name')).to.equal('Editor');
                expect(model.get('lowerCaseName')).to.equal('editor');
            });
        });
    });
  });