Ext.define('mvvmgridcrud.model.User', {
  extend: 'mvvmgridcrud.model.Base',

  fields: [{
    type: 'int',
    name: 'id'
  }, {
    type: 'string',
    name: 'first_name'
  }, {
    type: 'string',
    name: 'last_name'
  }],

  proxy: {
    type: 'ajax',
    api: {
      read: 'get',
      create: 'create',
      update: 'update',
      destroy: 'destroy'
    },
    reader: {
      type: 'json',
      rootProperty: 'data'
    },
    writer: {
      type: 'json',
      rootProperty: 'data',
      allowSingle: false
    }
  }
});
