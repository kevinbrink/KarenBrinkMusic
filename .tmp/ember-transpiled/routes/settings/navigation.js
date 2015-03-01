define("ghost/routes/settings/navigation", 
  ["ghost/routes/authenticated","ghost/mixins/current-user-settings","ghost/mixins/style-body","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var AuthenticatedRoute = __dependency1__["default"];
    var CurrentUserSettings = __dependency2__["default"];
    var styleBody = __dependency3__["default"];

    var NavigationRoute = AuthenticatedRoute.extend(styleBody, CurrentUserSettings, {

        titleToken: 'Navigation',

        classNames: ['settings-view-navigation'],

        beforeModel: function () {
            return this.currentUser().then(this.transitionAuthor());
        },

        model: function () {
            return this.store.find('setting', {type: 'blog,theme'}).then(function (records) {
                return records.get('firstObject');
            });
        },

        actions: {
            save: function () {
                // since shortcuts are run on the route, we have to signal to the components
                // on the page that we're about to save.
                $('.page-actions .btn-blue').focus();

                this.get('controller').send('save');
            }
        }
    });

    __exports__["default"] = NavigationRoute;
  });