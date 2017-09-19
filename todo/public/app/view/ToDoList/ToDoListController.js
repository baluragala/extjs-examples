Ext.define('ToDo.view.toDoList.ToDoListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todoList',
    views: ['ToDo.view.toDoList.ToDoList'],

    init: function () {
        var me = this;
        this.getViewModel().data.todos.load(function (records) {

            Ext.each(records, function (record) {
                //Add a container for each record
                me.addToDoToView(record);
            });
        });

        Ext.getBody().on('click', function (event, target) {
            me.onDelete(event, target);
        }, null, {
            delegate: '.fa-times'
        });

    },

    onAddToDo: function () {

        var store = this.getViewModel().data.todos;
        
        var desc = this.lookupReference('newToDo').value.trim();
        if (desc != '') {
            store.add({
                desc: desc
            });
            store.sync({
                success: function (batch, options) {
                    this.lookupReference('newToDo').setValue('');
                    this.addToDoToView(options.operations.create[0]);
                },
                scope: this
            });
        }

    },

    addToDoToView: function (record) {

        this.view.add([{
            xtype: 'container',
            layout: 'hbox',
            cls: 'row',
            items: [
                {
                    xtype: 'checkbox',
                    boxLabel: record.get('desc'),
                    checked: record.get('done'),
                    inputValue:record.get('id'),
                    flex: 1,
                    id:record.get('id'),
                    handler: 'updateDoneFlag'
                },
                {
                    html: '<a class="hidden" href="#"><i taskId="' + record.get('id') + '" class="fa fa-times"></i></a>',
                }]
        }]);
    },

    updateDoneFlag: function (field, value){
        var store = this.getViewModel().data.todos;
        var record = store.getById(field.id);
        var data = record.data;
        console.log(data.desc)
        record.set({done:value,desc:data.desc});
        store.sync({
            success: function () {
                console.log('updated')
            },
            scope: this
        });
    },

    onDelete: function (event, target) {
        console.log('Delete:',event)
        var store = this.getViewModel().data.todos;
        var targetCmp = Ext.get(target);
        var id = targetCmp.getAttribute('taskId');
        store.remove(store.getById(id));
        store.sync({
            success: function () {
                this.view.remove(targetCmp.up('.row').id)
            },
            scope: this
        });
    }
});


