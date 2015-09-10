angular.module('ormPlanner')
  .directive('navbar', function($state) {
    return {
      templateUrl: 'components/navbar/navbar.html',
      controller: function($scope, TableManager, AddTable, $stateParams, hotkeys, $rootScope) {
        $scope.tables = TableManager.tables
        
        hotkeys.add({
          combo: 'ctrl+n',
          description: 'Add new table',
          callback: AddTable.toggle.bind(AddTable)
        })

        $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
          if(toParams.name) {
            TableManager.get({ name: toParams.name })
              .then(function(table) {
                $scope.table = table
              })
          }
        })
        
        $scope.navigate = function() {
          $state.go('table', { name:  $scope.table.name })
        }

        $scope.addTable = function() {
          AddTable.toggle()
        }
      }
    }
  })
