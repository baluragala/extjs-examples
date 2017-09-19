Ext.define('ToDo.view.toDoList.ToDoListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.todoList',
    stores: {
        todos: {
            fields: [
                {   name: 'id', type: 'string'  },
                {   name: 'desc', type: 'string'    },
                {   name: 'done', type: 'boolean'   }
            ],
            autoLoad: false,
            sorters: [{
                property: 'done',
                direction: 'ASC'
            }],
            proxy: {
                type: 'rest',
                url: 'tasks',
                reader: {
                    type: 'json',
                },
                writer: {
                    type: 'json'
                }
            }
        }
    }
});
