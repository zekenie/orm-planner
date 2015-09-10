angular.module('ormPlanner')
  .factory('AddTable', function($aside) {
    var aside = $aside({
      controller: function($scope, TableManager) {
        $scope.addTable = function() {
          TableManager.add($scope.newTable)
            .then(function(table) {
              aside.hide()
            })
        }
      },
      templateUrl: 'components/addtable/addTable.html',
      backdrop: true,
      placement: 'left',
      show: false
    })

    return aside
  })
