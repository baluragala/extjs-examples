/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ZeoApp.Application',

    name: 'ZeoApp',

    requires: [
        // This will automatically load all classes in the ZeoApp namespace
        // so that application classes do not need to require each other.
        'ZeoApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ZeoApp.view.main.Main'
});
