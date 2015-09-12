angular.module('ormPlanner')
  .factory('Table', function($state, $q, Field) {
    var Table = function(params) {
      for(var key in params) {
        this[key] = params[key]
      }
      this.setDefaults()
    }

    Table.prototype.addField = function(f) {
      var field = new Field(f)
      this.fields.push(field)
      return $q.when(field)
    }

    Table.prototype.sref = function() {}

    Table.prototype.go = function() {
      $state.go('table', { name: this.name })
    }

    Table.prototype.setDefaults = function() {
      this.associations = [];
      this.fields = [];
    }

    Table.fieldTypes = [];

    return Table
  })
