angular.module('ormPlanner')
  .config(function($stateProvider) {
    $stateProvider.state('table', {
      url: '/tables/{name}',
      controller: 'TableCtrl',
      templateUrl: 'table/table.html',
      resolve: {
        table: function(TableManager, $stateParams) {
          return TableManager.get({ name: $stateParams.name })
        }
      }
    })
  })
  .controller('TableCtrl', function($scope, table) {
    $scope.table = table;
  })
