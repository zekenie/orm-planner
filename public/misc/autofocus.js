angular.module('ormPlanner')
  .directive('autofocus', function($timeout) {
    return {
      restrict: 'A',
      link: function(s,e,a) {
        $timeout(function() {
          e[0].focus()
        })
      }
    }
  })
