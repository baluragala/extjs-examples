/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'mvvmgridcrud.Application',

    name: 'mvvmgridcrud',

    requires: [
        // This will automatically load all classes in the mvvmgridcrud namespace
        // so that application classes do not need to require each other.
        'mvvmgridcrud.*'
    ],

    // The name of the initial view to create.
    mainView: 'mvvmgridcrud.view.grid.Grid'
});
