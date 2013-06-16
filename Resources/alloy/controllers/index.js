function Controller() {
    function SaveUser() {
        Ti.App.Properties.setString("user", $.username.value);
        $.login.hide();
        $.user.setText(Ti.App.Properties.getString("user"));
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
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.quote = Ti.UI.createLabel({
        width: "10%",
        height: Ti.UI.SIZE,
        color: "#CC2A41",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10",
        top: "20",
        font: {
            fontSize: "70dp",
            fontFamily: "Bodoni 72"
        },
        id: "quote",
        text: "“"
    });
    $.__views.__alloyId1.add($.__views.quote);
    $.__views.chat = Ti.UI.createLabel({
        width: "80%",
        height: Ti.UI.SIZE,
        color: "#424254",
        top: "42",
        left: "42",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        font: {
            fontSize: "12dp",
            fontFamily: "HelveticaNeue"
        },
        id: "chat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    });
    $.__views.__alloyId1.add($.__views.chat);
    $.__views.username = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#351330",
        right: "20",
        top: "203",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        font: {
            fontSize: "16dp",
            fontFamily: "Bodoni 72"
        },
        id: "username",
        text: "Jason"
    });
    $.__views.__alloyId1.add($.__views.username);
    $.__views.user = Ti.UI.createLabel({
        width: "80%",
        height: "50",
        color: "#acacac",
        id: "user",
        top: "20"
    });
    $.__views.index.add($.__views.user);
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
        color: "#351330",
        right: "20",
        top: "200",
        width: "80%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        font: {
            fontSize: "16dp",
            fontFamily: "Bodoni 72"
        },
        id: "username",
        height: "20",
        hintText: "Username",
        value: ""
    });
    $.__views.login.add($.__views.username);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Login",
        top: "300",
        width: "200",
        height: "50",
        id: "__alloyId2"
    });
    $.__views.login.add($.__views.__alloyId2);
    SaveUser ? $.__views.__alloyId2.addEventListener("click", SaveUser) : __defers["$.__views.__alloyId2!click!SaveUser"] = true;
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
    $.index.open();
    __defers["$.__views.__alloyId2!click!SaveUser"] && $.__views.__alloyId2.addEventListener("click", SaveUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;