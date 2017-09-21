Ext.application({
  name: "ZeoApp",
  launch: function() {
    Ext.create("Ext.Button", {
      text: "Save",
      renderTo: Ext.getBody(),
      margin: 5,
      handler: function() {
        /*Ext.MessageBox.show({
                    title:'Save Changes?',
                    msg: 'Do you want to save the file?',
                    buttons: Ext.MessageBox.YESNO,
                    fn: function(button){
                      if('yes'==button)
                      {
                        alert(button)
                      }
                      else if('no'==button)
                      {
                          alert(button)
                      }
                    } ,
                    icon: Ext.MessageBox.QUESTION
                      });*/

        Ext.Msg.confirm(
          "Confirm",
          "Are you want to cancel the updates?",
          function(button) {
            if ("yes" == button) {
            } else {
            }
          }
        );
      }
    });

    Ext.create("Ext.Button", {
      text: "Press Me!!",
      renderTo: Ext.getBody(),
      padding: 10,
      margin: 5,
      listeners: {
        click: function(target, event) {
          Ext.Msg.alert("I am pressed ....", "Super!!!");
        },
        mouseover: function(target, event) {
          target.el.setStyle({ backgroundColor: "red" });
        },

        mouseout: function(target, event) {
          target.el.setStyle({ backgroundColor: "" });
        }
      }
    });

    Ext.create("Ext.Button", {
      text: "Categories",
      renderTo: Ext.getBody(),
      margin: 5,
      menu: [
        {
          text: "Mens",
          handler: function() {
            Ext.Msg.alert("Mens");
          }
        },
        {
          text: "Women",
          handler: function() {
            Ext.Msg.alert("Women");
          }
        },
        {
          text: "Kids",
          handler: function() {
            Ext.Msg.alert("Kids");
          }
        }
      ]
    });

    Ext.create("Ext.form.field.Text", {
      renderTo: Ext.getBody(),
      name: "email",
      fieldLabel: "Email",
      allowBlank: false,
      vtype: "email"
    });

    Ext.create("Ext.form.field.Number", {
      renderTo: Ext.getBody(),
      name: "Count",
      fieldLabel: "Counter",
      value: 0,
      maxValue: 10,
      minValue: 0
    });

    var months = Ext.create("Ext.data.Store", {
      fields: ["shortName", "name"],
      data: [
        { shortName: "JAN", name: "January" },
        { shortName: "FEB", name: "February" },
        { shortName: "MAR", name: "March" },
        { shortName: "APR", name: "April" },
        { shortName: "MAY", name: "May" },
        { shortName: "JUN", name: "June" },
        { shortName: "JUL", name: "July" },
        { shortName: "AUG", name: "August" },
        { shortName: "SEP", name: "September" },
        { shortName: "OCT", name: "October" },
        { shortName: "NOV", name: "November" },
        { shortName: "DEC", name: "December" }
      ]
    });

    Ext.create("Ext.form.ComboBox", {
      fieldLabel: "Choose Month",
      store: months,
      queryMode: "local",
      displayField: "name",
      valueField: "shortName",
      renderTo: Ext.getBody()
    });

    Ext.create("Ext.form.HtmlEditor", {
      width: 800,
      height: 200,
      renderTo: Ext.getBody()
    });

    Ext.create("Ext.form.CheckboxGroup", {
      renderTo: Ext.getBody(),
      fieldLabel: "Skills ",
      vertical: true,
      columns: 1,
      items: [
        { boxLabel: "Angular", name: "skillgroup", inputValue: "1" },
        {
          boxLabel: "React",
          name: "skillgroup",
          inputValue: "2",
          checked: true
        },
        { boxLabel: "Ember", name: "skillgroup", inputValue: "3" },
        { boxLabel: "Backbone", name: "skillgroup", inputValue: "4" }
      ]
    });

    Ext.create("Ext.form.FieldContainer", {
      renderTo: Ext.getBody(),
      fieldLabel: "Name",
      layout: "hbox",
      combineErrors: true,
      defaultType: "textfield",
      defaults: {
        hideLabel: "true"
      },
      items: [
        {
          name: "firstName",
          fieldLabel: "First Name",
          flex: 2,
          emptyText: "First",
          allowBlank: false
        },
        {
          name: "lastName",
          fieldLabel: "Last Name",
          flex: 3,
          margin: "0 0 0 6",
          emptyText: "Last",
          allowBlank: false
        }
      ]
    });

    Ext.create("Ext.form.RadioGroup", {
      renderTo: Ext.getBody(),
      fieldLabel: "Gender ",
      vertical: false,
      columns: 1,
      items: [
        { boxLabel: "Male", name: "gendergroup", inputValue: "1" },
        { boxLabel: "Female", name: "gendergroup", inputValue: "2" }
      ]
    });

    Ext.create("Ext.toolbar.Toolbar", {
      renderTo: Ext.getBody(),
      width: 800,
      items: [
        {
          text: "My Button"
        },
        {
          text: "My Button",
          menu: [
            {
              text: "Item 1"
            },
            {
              text: "Item 2"
            },
            {
              text: "Item 3"
            }
          ]
        },
        {
          text: "Menu with divider",
          tooltip: {
            text: "Tooltip info",
            title: "Tip Title"
          },
          menu: {
            items: [
              {
                text: "Task 1"
                // handler: onItemClick
              },
              "-",
              {
                text: "Task 2"
                // handler: onItemClick
              },
              {
                text: "Task 3"
                // handler: onItemClick
              }
            ]
          }
        },
        "->",
        {
          xtype: "textfield",
          name: "field1",
          emptyText: "search web site"
        },
        "-",
        "Some Info",
        {
          xtype: "tbspacer"
        },
        {
          name: "Count",
          xtype: "numberfield",
          value: 0,
          maxValue: 10,
          minValue: 0,
          width: 60
        }
      ]
    });
  }
});
