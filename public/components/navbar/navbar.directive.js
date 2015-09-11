angular.module('ormPlanner')
  .directive('navbar', function($state) {
    return {
      templateUrl: 'components/navbar/navbar.html',
      controller: function($scope, TableManager, TableForm, $stateParams, hotkeys, $rootScope) {
        
        var form = TableForm({
          onSubmit: function(tableObj) {
            TableManager.add(tableObj)
              .then(function(table) {
                table.go()
                form.hide()
              })
          }
        })
        
        $scope.tables = TableManager.tables
        
        hotkeys.add({
          combo: 'ctrl+n',
          description: 'Add new table',
          callback: form.toggle.bind(form)
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
          form.toggle()
        }
      }
    }
  })
