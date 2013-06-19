function Controller() {
    function SaveUser() {
        Ti.App.Properties.setString("user", $.username.value);
        $.login.hide();
        $.user.setText(Ti.App.Properties.getString("user"));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.user = Ti.UI.createLabel({
        id: "user",
        width: "80%",
        top: "20",
        height: "50"
    });
    $.__views.index.add($.__views.user);
    var __alloyId1 = {};
    var __alloyId3 = [];
    var __alloyId4 = {
        type: "Ti.UI.Label",
        bindId: "chat",
        properties: {
            color: "#424254",
            width: "80%",
            top: "10",
            left: "42",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            font: {
                fontSize: "12",
                fontFamily: "HelveticaNeue"
            },
            bindId: "chat"
        }
    };
    __alloyId3.push(__alloyId4);
    var __alloyId5 = {
        type: "Ti.UI.Label",
        properties: {
            color: "#351330",
            right: "20",
            bottom: "5",
            width: Ti.UI.SIZE,
            textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
            font: {
                fontSize: "16",
                fontFamily: "Bodoni 72"
            },
            text: "Jason"
        }
    };
    __alloyId3.push(__alloyId5);
    var __alloyId6 = {
        type: "Ti.UI.Label",
        properties: {
            color: "#CC2A41",
            textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
            width: "20",
            left: "10",
            top: "20",
            font: {
                fontSize: "70",
                fontFamily: "Bodoni 72"
            },
            text: "“"
        }
    };
    __alloyId3.push(__alloyId6);
    var __alloyId2 = {
        properties: {
            name: "them",
            height: "75"
        },
        childTemplates: __alloyId3
    };
    __alloyId1["them"] = __alloyId2;
    var __alloyId9 = [];
    var __alloyId11 = {
        type: "Ti.UI.Label",
        bindId: "label",
        properties: {
            bindId: "label"
        }
    };
    __alloyId9.push(__alloyId11);
    var __alloyId8 = {
        properties: {
            name: "us",
            height: "50"
        },
        childTemplates: __alloyId9
    };
    __alloyId1["us"] = __alloyId8;
    var __alloyId12 = [];
    var __alloyId15 = [];
    $.__views.__alloyId16 = {
        chat: {
            text: "this is some text"
        },
        properties: {
            id: "__alloyId16"
        }
    };
    __alloyId15.push($.__views.__alloyId16);
    $.__views.__alloyId17 = {
        chat: {
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        properties: {
            id: "__alloyId17"
        }
    };
    __alloyId15.push($.__views.__alloyId17);
    $.__views.__alloyId18 = {
        chat: {
            text: "this is some text"
        },
        properties: {
            id: "__alloyId18"
        }
    };
    __alloyId15.push($.__views.__alloyId18);
    $.__views.__alloyId19 = {
        chat: {
            text: "this is some text"
        },
        properties: {
            id: "__alloyId19"
        }
    };
    __alloyId15.push($.__views.__alloyId19);
    $.__views.__alloyId13 = Ti.UI.createListSection({
        id: "__alloyId13"
    });
    __alloyId12.push($.__views.__alloyId13);
    $.__views.__alloyId13.items = __alloyId15;
    $.__views.list = Ti.UI.createListView({
        sections: __alloyId12,
        templates: __alloyId1,
        id: "list",
        defaultItemTemplate: "them"
    });
    $.__views.index.add($.__views.list);
    $.__views.login = Ti.UI.createView({
        backgroundColor: "#FFF",
        id: "login"
    });
    $.__views.index.add($.__views.login);
    $.__views.header1 = Ti.UI.createLabel({
        top: 100,
        id: "header1",
        text: "Please enter your user name:"
    });
    $.__views.login.add($.__views.header1);
    $.__views.username = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#351330",
        right: "20",
        bottom: "5",
        width: "80%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_RIGHT,
        font: {
            fontSize: "16",
            fontFamily: "Bodoni 72"
        },
        id: "username",
        top: "200",
        height: "20",
        hintText: "Username",
        value: ""
    });
    $.__views.login.add($.__views.username);
    $.__views.__alloyId20 = Ti.UI.createButton({
        title: "Login",
        top: "300",
        width: "200",
        height: "50",
        id: "__alloyId20"
    });
    $.__views.login.add($.__views.__alloyId20);
    SaveUser ? $.__views.__alloyId20.addEventListener("click", SaveUser) : __defers["$.__views.__alloyId20!click!SaveUser"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId20!click!SaveUser"] && $.__views.__alloyId20.addEventListener("click", SaveUser);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;