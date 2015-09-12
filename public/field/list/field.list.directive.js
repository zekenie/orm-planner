angular.module('ormPlanner')
  .directive('fieldList', function() {
    return {
      restrict: 'E',
      scope: {
        table: '='
      },
      templateUrl: 'field/list/field.list.html',
      controller: function($scope, FieldForm) {
        var newForm = FieldForm({
          onSubmit: function(field) {
            console.log('field from sidebar', field)
            $scope.table.addField(field)
              .then(function(feildResp) {
                console.log('from addField promise', feildResp)
              })
          }
        })

        $scope.addField = function() {
          newForm.show()
        }
      }
    }
  })
