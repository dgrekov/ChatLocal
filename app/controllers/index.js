function doClick(e) {  
    alert($.label.text);
}

function SaveUser(e){
	Ti.App.Properties.setString('user', $.username.value);
	$.login.hide();
	$.user.setText(Ti.App.Properties.getString('user'));
}


var sections = [];

var fruitSection = Ti.UI.createListSection({ headerTitle: 'Jason'});
var fruitDataSet = [
    {properties: { title: 'Hey How Are you?'}},
    {properties: { title: 'Hello?'}},
];
fruitSection.setItems(fruitDataSet);
sections.push(fruitSection);

var vegSection = Ti.UI.createListSection({ headerTitle: 'Dmitry'});
var vegDataSet = [
    {properties: { title: 'Oh Hey'}},
    {properties: { title: 'Did not see you there'}},
];
vegSection.setItems(vegDataSet);
sections.push(vegSection);

//$.chat.sections = sections;

$.index.open();
