angular.module('ormPlanner')
.factory('FieldForm', function($aside) {
  return function(params) {
    var aside = $aside({
      controller: function($scope) {
        $scope.addField = params.onSubmit
      },
      templateUrl: 'field/form/field.form.html',
      backdrop: true,
      placement: 'left',
      show: false
    })

    return aside
  }

})
