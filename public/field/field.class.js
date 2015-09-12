angular.module('ormPlanner')
  .factory('Field', function() {
    var Field = function(f) {
      for(var key in f) {
        this[key] = f[key]
      }
    }

    return Field
  })
