
// Set the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');

//////////////////////////////////////////////////////Create First Window
var win = Titanium.UI.createWindow
({  
    oldWin: Ti.UI.currentWindow,		
    backgroundColor:'#f6f6f6',

    fullscreen: true,
    layout: "vertical"
});


var header = Ti.UI.createView
({
	height: 50,
	backgroundColor: "#B32239",
	top: 0
});

var HL = Ti.UI.createLabel
({
   text: 'REDDIT GIF BROWSER',
   color: "#F8F8F8",
   font: {fontSize: 30},
   top: 5,
   height: "auto"
});

var scroll = Ti.UI.createScrollView
({
	height: Ti.Platform.displayCaps.platforHeight - header,
	layout: "vertical"
});


var BB = Ti.UI.createView
({
	height: 20,
	backgroundColor: "#B32239",
	bottom: 0
});

var HL2 = Ti.UI.createLabel
({
   text: 'Database',
   color: "#F8F8F8",
   font: {fontSize: 12},
   top: 5,
   height: "auto"
});


BB.add(HL2);

//Call getRemoteData and populate scrollview 
header.add(HL);
win.add(header);
win.add(BB);
win.add(scroll);

var D1 = require("GetRemoteData");
var D3 = require("DB");

//read from database
D3.read();
HL2.addEventListener("click", D3.ST);

// open tab group
win.open();
