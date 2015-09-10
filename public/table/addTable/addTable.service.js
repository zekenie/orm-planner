angular.module('ormPlanner')
  .factory('AddTable', function($aside) {
    var aside = $aside({
      controller: function($scope, TableManager) {
        $scope.tables = TableManager.tables
        $scope.addTable = function() {
          TableManager.add($scope.newTable)
            .then(function(table) {
              table.go()
              aside.hide()
            })
        }
      },
      templateUrl: 'table/addTable/addTable.html',
      backdrop: true,
      placement: 'left',
      show: false
    })

    return aside
  })
