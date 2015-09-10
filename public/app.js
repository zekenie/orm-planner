angular.module('ormPlanner', ['ui.router', 'mgcrea.ngStrap', 'cfp.hotkeys'])
  .config(function($asideProvider) {
    angular.extend($asideProvider.defaults, {
      container: 'body',
      html: true
    })
  })
  .controller('MainCtrl', function($scope) {})
