Ext.application({
  name: "ZeoApp",
  launch: function() {
    Ext.define("Employee", {
      extend: "Ext.data.Model",
      fields: [
        { name: "id", type: "int", convert: null },
        { name: "firstName", type: "string" },
        { name: "lastName", type: "string" },
        {
          name: "fulltime",
          type: "boolean",
          defaultValue: true,
          convert: null
        },
        { name: "gender", type: "string" },
        { name: "phoneNumber", type: "string" }
      ],
      validators: {
        firstName: [{ type: "presence" }, { type: "length", min: 2 }],
        lastName: [{ type: "presence" }, { type: "length", min: 2 }],
        phoneNumber: {
          type: "format",
          matcher: "/^[(+{1})|(00{1})]+([0-9]){7,10}$/"
        },
        gender: {
          type: "inclusion",
          list: ["Male", "Female"]
        }
      }
    });

    //create instance

    var newEmployee = Ext.create("Employee", {
      id: 1,
      firstName: "BalaKrishna",
      lastName: "Ragala",
      fulltime: true,
      gender: "Male",
      phoneNumber: "123-456-7890"
    });

    var empStore = Ext.create("Ext.data.Store", {
      model: "Employee",
      storeId: "mystore",
      proxy: {
        type: "rest",
        url: "/employee",
        reader: {
          type: "json",
          rootProperty: "data"
        }
      },
      autoLoad: true,
      autoSync: true
    });

    Ext.create("Ext.data.Store", {
      model: "Employee",
      data: [
        {
          firstName: "BalaKrishna",
          lastName: "Ragala",
          gender: "Male",
          fulltime: true,
          phoneNumber: "123-456-7890"
        },
        {
          firstName: "James",
          lastName: "Cameroon",
          gender: "Male",
          fulltime: true,
          phoneNumber: "123-456-7890"
        }
      ]
    });

    Ext.data.StoreManager.lookup("empStore");

    var myStore = this.getViewModel().getStore("myStore");

    Ext.create("Ext.data.Store", {
      model: "Employee ",
      storeId: "mystore",
      proxy: {
        type: "rest",
        url: "/employee",
        reader: {
          type: "json",
          rootProperty: "data"
        }
      },
      listeners: {
        load: function(store, records, options) {
          //Do something
        }
      }
    });

    Ext.define("Address", {
      extend: "Ext.data.Model",
      fields: ["address", "city", "state", "zipcode"]
    });

    Ext.define("Employee", {
      extend: "Ext.data.Model",
      fields: [
        {
          name: "addressId",
          reference: "Address"
        }
      ]
    });
  }
});
