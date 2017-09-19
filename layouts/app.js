
Ext.application({
    name: 'ZeoApp',
    launch: function () {
        /*  Column Layout*/
        var columnLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody()
            width: 700,
            height: 400,
            layout: 'column',
            items: [
                {
                    xtype: 'panel',
                    title: 'Panel 1',
                    columnWidth: 0.4,
                    height: 400,
                },
                {
                    xtype: 'panel',
                    title: 'Panel 2',
                    columnWidth: 0.6,
                    layout: 'center',
                    height: 400,
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
                    height: 400,
                }
            ]
        });


        // based on x and y position
        var absoluteLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody(),
            width: 700,
            height: 400,
            layout: 'absolute',
            items: [
                {
                    xtype: 'panel',
                    title: 'Panel 1',
                    x: 12,
                    y: 20,
                    height: 250,
                },
                {
                    xtype: 'panel',
                    title: 'Panel 2',
                    x: 200,
                    y: 150,
                    height: 200,
                },
                {
                    xtype: 'panel',
                    title: 'Panel 3',
                    x: 400,
                    y: 250,
                    width: 150,
                    height: 100,
                }
            ]
        });


        var accordionLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo: Ext.getBody(),
            width: 700,
            height: 400,
            layout: 'accordion',
            items: [
                {
                    title: 'Item 1',
                    html: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                },
                {
                    title: 'Item 2',
                    html: 'some content here'
                },
                {
                    title: 'Item 3',
                    html: 'empty'
                }
            ]
        });

        //This layout enables you to specify the size of the child components that are relative to the container
        var anchorLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody(),
            width: 700,
            height: 400,
            bodyStyle: { "background-color": "gray" },
            layout: 'anchor',
            items: [
                {
                    title: 'Item 1',
                    html: 'Item 1',
                    anchor: '50%',
                    bodyStyle: { "background-color": "blue" }
                },
                {
                    title: 'Item 2',
                    html: 'Item 2',
                    anchor: '-80 -200',
                    bodyStyle: { "background-color": "yellow" }
                },
                {
                    title: 'Item 3',
                    html: 'Item 3',
                    bodyStyle: { "background-color": "green" },
                    anchor: '-100',
                    height: 300
                }
            ]
        });

        var borderLayout = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody(),
            width: 700,
            height: 400,
            layout: 'border',
            items: [
                {

                    html: 'Center',
                    region: 'center',
                    bodyStyle: { "background-color": "blue" }
                },
                {

                    html: 'west',
                    region: 'west',
                    width: 200,
                    bodyStyle: { "background-color": "red" }
                },
                {

                    html: 'East',
                    region: 'east',
                    width: 200,
                    bodyStyle: { "background-color": "red" }
                },
                {

                    html: 'South',
                    region: 'south',
                    height: 100,
                    bodyStyle: { "background-color": "green" }
                },

                {
                    html: 'north',
                    region: 'north',
                    height: 100,
                    bodyStyle: { "background-color": "green" }
                }
            ]
        });

        var cradLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo: Ext.getBody(),
            width: 700,
            height: 400,
            layout: 'card',
            defaultListenerScope: true,
            bbar: ['->',
                {
                    itemId: 'btn-prev',
                    text: 'Previous',
                    handler: 'showPrevious',
                    disabled: true
                },
                {
                    itemId: 'btn-next',
                    text: 'Next',
                    handler: 'showNext'
                }
            ],
            items: [
                {
                    index: 0,
                    title: 'Item 1',
                    html: 'Item 1'
                },
                {
                    index: 1,
                    title: 'Item 2',
                    html: 'Item 2'
                },
                {
                    index: 2,
                    title: 'Item 3',
                    html: 'Item 3'
                }
            ],
            showNext: function () {
                this.navigate(1);
            },

            showPrevious: function () {
                this.navigate(-1);
            },
            navigate: function (incr) {
                var layout = this.getLayout();
                var index = layout.activeItem.index + incr;
                layout.setActiveItem(index);

                this.down('#btn-prev').setDisabled(index === 0);
                this.down('#btn-next').setDisabled(index === 2);
            }
        });


        var fitLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody(),
            width: 700,
            height: 400,
            layout: 'fit',
            bodyPadding: 20,
            items: [
                {
                    title: 'Item 1',
                    html: 'Fills the container',
                },
                { // this is not seen 
                    title: 'Item 2',
                    html: 'Fills the container',
                }
            ]
        });


        var hboxLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody(),
            width: 700,
            height: 400,
            layout:
            {
                type: 'hbox',
                pack: 'end', //Controls how the child items of the container are packed together
                align: 'stretch',
            },
            items: [
                {
                    title: 'Item 1',
                    html: 'Item 1',
                    flex: 1
                },
                {
                    title: 'Item 2',
                    html: 'Item 2',
                    width: 100
                },
                {
                    title: 'Item 3',
                    html: 'Item 3',
                    flex: 2
                }
            ]
        });

        var tableLayoutPanel = Ext.create('Ext.panel.Panel', {
            //renderTo     : Ext.getBody(),
            width: 700,
            height: 400,
            layout:
            {
                type: 'table',
                columns: 3,
                tableAttrs: {
                    style: {
                        width: '100%'
                    }
                }
            },
            items: [
                {
                    rowspan: 3,
                    title: 'Item 1',
                    html: 'Item 1'
                },
                {
                    title: 'Item 2',
                    html: 'Item 2'
                },
                {
                    title: 'Item 3',
                    rowspan: 2,
                    html: 'Item 3'
                },
                {
                    title: 'Item 4',
                    html: 'Item 4'
                },
                {
                    title: 'Item 5',
                    html: 'Item 5'
                },
                {
                    title: 'Item 6',
                    html: 'Item 6'
                },
                {
                    title: 'Item 7',
                    html: 'Item 7'
                }
            ]
        });


        var vboxLayoutPanel =
            Ext.create('Ext.panel.Panel', {
                //renderTo     : Ext.getBody(),
                width: 700,
                height: 400,
                layout:
                {
                    type: 'vbox',
                    pack: 'start',
                    align: 'stretch',
                },
                items: [
                    {
                        title: 'Item 1',
                        html: 'Item 1',
                        flex: 1
                    },
                    {
                        title: 'Item 2',
                        html: 'Item 2',
                        height: 100
                    },
                    {
                        title: 'Item 3',
                        html: 'Item 3',
                        flex: 2
                    }
                ]
            });
        vboxLayoutPanel.render(Ext.getBody())




    }
});
