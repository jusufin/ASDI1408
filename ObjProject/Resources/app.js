
// Set the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');
var Data = require("GetObjData");

//////////////////////////////////////////////////////Create First Window
var win = Titanium.UI.createWindow
({  
    
    backgroundColor:'#f6f6f6',
    fullscreen: true,
    layout: "vertical"
});

var header = Ti.UI.createView
({
	height: 30,
	backgroundColor: "#ccc",
	top: 0
});

var HL = Ti.UI.createLabel
({
   text: 'Objects',
   color: "White",
   font: {fontSize: 20},
   top: 5,
   height: "auto"
});

var V2 = Ti.UI.createLabel
({
	height: Ti.Platform.displayCaps.platforHeight - header,
	width: "100%",
	font: {fontSize: 12},
	text: Data.msg
});

header.add(HL);
win.add(header);
win.add(V2);



// open tab group
win.open();
