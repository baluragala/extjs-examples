Ext.define('mvvmgridcrud.view.grid.GridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mygridpanel_controller',
  requires:['mvvmgridcrud.model.User'],
  onAdd: function () {
    var form = this.lookupReference('name_form'),
      store = this.getViewModel().getStore('Names'), // this isnt necessary i am just doing to show it being added to the grid
      values, model;

    if (form.isValid()) {
      values = form.getValues();
      model = Ext.create('mvvmgridcrud.model.User', values);
      store.add(model);
      store.sync();
    }
  },

  onUpdate: function (editor, edit) {
    edit.store.sync(); // You would want to return the record you just saved
  },

  onDelete: function (t, rowid, colid, item, evt, rec) {
    console.log(rec);
    var store = rec.store;
    store.remove(rec);
    store.sync();
  }
});
