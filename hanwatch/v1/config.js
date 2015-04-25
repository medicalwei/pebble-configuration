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
	var settings = JSON.stringify({
		white_on_black: $("#white_on_black").prop('checked')?1:0,
		vibrate_on_disconnect: $("#vibrate_on_disconnect").prop('checked')?1:0
	});
	window.localStorage.setItem(StorageName, settings);
	location.href = "pebblejs://close#" + settings;
	event.preventDefault();
});

$("#cancelButton").click(function(event){
	location.href = "pebblejs://close#{\"cancel\": true}";
});
