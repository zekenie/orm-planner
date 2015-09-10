angular.module('ormPlanner')
  .factory('Table', function() {
    var maxId = 0
    var Table = function(params) {
      for(var key in params) {
        this[key] = params[key]
      }
      this.generateId()
      this.setDefaults()
    }

    Table.prototype.generateId = function() {
      if(typeof this.id !== 'undefined') {
        throw new Error('attempting to set ID of table already set')
      }
      this.id = ++maxId
      return this.id
    }

    Table.prototype.setDefaults = function() {
      this.associations = [];
      this.fields = [];
    }

    Table.fieldTypes = [];

    return Table
  })
