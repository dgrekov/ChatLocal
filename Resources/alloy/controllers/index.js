function Controller() {
    function SaveUser() {
        Ti.App.Properties.setString("user", $.username.value);
        $.login.hide();
        $.user.setText("Hello, " + Ti.App.Properties.getString("user"));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.user = Ti.UI.createLabel({
        width: "80%",
        height: "50",
        color: "#acacac",
        id: "user",
        top: "20"
    });
    $.__views.index.add($.__views.user);
    $.__views.chat = Ti.UI.createListView({
        id: "chat"
    });
    $.__views.index.add($.__views.chat);
    $.__views.login = Ti.UI.createView({
        backgroundColor: "#FFF",
        id: "login"
    });
    $.__views.index.add($.__views.login);
    $.__views.header1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#acacac",
        top: 100,
        id: "header1",
        text: "Please enter your user name:"
    });
    $.__views.login.add($.__views.header1);
    $.__views.username = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        id: "username",
        width: "80%",
        top: "200",
        height: "20",
        hintText: "JAseed",
        value: ""
    });
    $.__views.login.add($.__views.username);
    $.__views.__alloyId1 = Ti.UI.createButton({
        title: "Login",
        top: "300",
        width: "200",
        height: "50",
        id: "__alloyId1"
    });
    $.__views.login.add($.__views.__alloyId1);
    SaveUser ? $.__views.__alloyId1.addEventListener("click", SaveUser) : __defers["$.__views.__alloyId1!click!SaveUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var sections = [];
    var fruitSection = Ti.UI.createListSection({
        headerTitle: "Jason"
    });
    var fruitDataSet = [ {
        properties: {
            title: "Hey How Are you?"
        }
    }, {
        properties: {
            title: "Hello?"
        }
    } ];
    fruitSection.setItems(fruitDataSet);
    sections.push(fruitSection);
    var vegSection = Ti.UI.createListSection({
        headerTitle: "Dmitry"
    });
    var vegDataSet = [ {
        properties: {
            title: "Oh Hey"
        }
    }, {
        properties: {
            title: "Did not see you there"
        }
    } ];
    vegSection.setItems(vegDataSet);
    sections.push(vegSection);
    $.chat.sections = sections;
    $.index.open();
    __defers["$.__views.__alloyId1!click!SaveUser"] && $.__views.__alloyId1.addEventListener("click", SaveUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;