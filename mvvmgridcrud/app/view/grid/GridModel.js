Ext.define('mvvmgridcrud.view.grid.GridModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mygridpanel_model',

  requires: [
    'mvvmgridcrud.model.User'
  ],

  stores: {
    Names: {
      autoLoad: true,
      model: 'mvvmgridcrud.model.User'
    }
  }
});
