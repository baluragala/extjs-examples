// app/view/main/Tree.js
Ext.define('ArchitectureCms.view.main.Tree', {
    extend: 'Ext.tree.Panel',
    xtype: 'page-tree',
    rootVisible: false,
     tbar: [
        { xtype: 'textfield', emptyText: 'Search...', width: '100%', bind: { value: '{searchTerm}'}}
    ],

    bind: { store: '{pages}', searchFor: '{searchTerm}' },

    config: {
        searchFor: null
    },

    applySearchFor: function(text) {
    var root = this.getRootNode();
    var match = root.findChildBy(function(child) {
        var txt = child.get('text');

        if(txt.match(new RegExp(text, 'i'))) {
            this.expandNode(child, true, function() {
                var node = this.getView().getNode(child);
                Ext.get(node).highlight();
            }, this);
        }
    }, this, true);
}
});