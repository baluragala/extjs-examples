
Ext.application({
    name: 'ZeoApp',    
    launch: function () {
        Ext.create('Ext.panel.Panel', {
				  renderTo     : Ext.getBody(), //Ext.get('app'),
				  width        : 700,
				  height       : 400,
				  items: [
				  {
				    xtype: 'panel',
				    title: 'Panel 1',
				  },
				  {
				    xtype: 'panel',
				    title: 'Panel 2',
				    height: 200,
				    items: [
				    {
				      xtype: 'button',
				      text: 'Click Me'
				    }
				    ]
				  },
				  {
				    xtype: 'panel',
				    title: 'Panel 3',
				    width: 150,
				    height: 100,
				  }
				  ]
			});
    }
});
