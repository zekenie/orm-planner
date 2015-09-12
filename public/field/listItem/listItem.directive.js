angular.module('ormPlanner')
  .directive('field', function() {
    return {
      restrict: 'E',
      scope: {
        field: '='
      },
      templateUrl: 'field/listItem/listItem.html',
      controller: function($scope) {
        $scope.remove = function() {
          if(confirm('Are you sure you want to remove this field?')) {
            $scope.field.remove()
          }
        }
      }
    }
  })
