
// Set the background color of the master UIView
Titanium.UI.setBackgroundColor('#000');


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
   text: 'REDDIT GIF BROWSER',
   color: "Red",
   font: {fontSize: 20},
   top: 5,
   height: "auto"
});

var scroll = Ti.UI.createScrollView
({
	height: Ti.Platform.displayCaps.platforHeight - header,
	layout: "vertical"
});

header.add(HL);
win.add(header);
win.add(scroll);



//////////////////////////////////////////////////////Second Window
	var win2 = Titanium.UI.createWindow
	({  
	    
	    backgroundColor:'#f6f6f6',
	    fullscreen: true,
	    layout: "vertical"
	});
	
	
	
	var header2 = Ti.UI.createView
	({
		height: 30,
		backgroundColor: "#ccc",
		top: 0
	});
	
	var HL2 = Ti.UI.createLabel
	({
	   text: 'COMMENTS BROWSER',
	   color: "White",
	   font: {fontSize: 20},
	   top: 10,
	   height: "auto"
	});


	
	header2.add(HL2);
	
	win2.add(header2);
	




var Data = require("GetRemoteData");
// open tab group
win.open();
