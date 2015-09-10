angular.module('ormPlanner')
  .factory('TableManager', function(Table, $q) {
    var tables = []
    return {
      tables: tables,
      get: function(query) {
        return $q.when(_.findWhere(tables, query))
      },
      add: function(t) {
        t = new Table(t)
        tables.push(t)
        return $q.when(t)
      }
    }
  })
