function doClick(e) {  
    alert($.label.text);
}

function SaveUser(e){
	Ti.App.Properties.setString('user', $.username.value);
	$.login.hide();
	$.user.setText(Ti.App.Properties.getString('user'));
}


$.index.open();
