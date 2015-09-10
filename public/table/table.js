angular.module('ormPlanner')
  .config(function($stateProvider) {
    $stateProvider.state('table', {
      url: '/tables/:tableId',
      controller: 'TableCtrl',
      templateUrl: 'table/table.html',
      resolve: {
        table: function(TableManager, $stateParams) {
          return TableManager.get($stateParams)
        }
      }
    })
  })
  .controller('TableCtrl', function($scope, table) {
    $scope.table = table;
  })
