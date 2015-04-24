/*
 * Chinese Watch configuration page
 * (C) 2015 Ming-ting Yao Wei
 */

var StorageName = "HanWatch";
var DefaultSettings = {
	white_on_black: false,
	vibrate_on_disconnect: true
};

$(function(){
	var settings = window.localStorage.getItem(StorageName);
	if(!settings) {
		settings = DefaultSettings;
	} else {
		settings = JSON.parse(settings);
	}
	$("#white_on_black").prop('checked', settings.white_on_black);
	$("#vibrate_on_disconnect").prop('checked', settings.vibrate_on_disconnect);
});

$("#settings").submit(function(event){
	var settings = {
		white_on_black: $("#white_on_black").prop('checked'),
		vibrate_on_disconnect: $("#vibrate_on_disconnect").prop('checked')
	};
	location.href = "pebblejs://close#" + JSON.stringify(settings);
	event.preventDefault();
});

$("#cancelButton").click(function(event){
	location.href = "pebblejs://close#{\"cancel\": true}";
});
