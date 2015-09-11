angular.module('ormPlanner')
.factory('TableForm', function($aside) {
  return function(params) {
    var aside = $aside({
      controller: function($scope, TableManager) {
        $scope.form = {}
        $scope.tables = TableManager.tables
        $scope.addTable = params.onSubmit.bind(this, $scope.form)
      },
      templateUrl: 'table/form/table.form.html',
      backdrop: true,
      placement: 'left',
      show: false
    })

    return aside
  }

})
