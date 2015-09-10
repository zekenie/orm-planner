angular.module('ormPlanner')
  .directive('navbar', function($state) {
    return {
      templateUrl: 'components/navbar.html',
      controller: function($scope, TableManager, AddTable) {
        $scope.tables = TableManager.tables

        $scope.navigate = function() {
          $state.go('table', { tableId: $scope.table.id })
        }

        $scope.addTable = function() {
          AddTable.toggle()
        }
      }
    }
  })
