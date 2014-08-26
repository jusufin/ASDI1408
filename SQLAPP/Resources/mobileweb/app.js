//Emin Jusufi
//3/26/2014

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var mainWin = Ti.UI.createWindow
({	
	
	title: "Main",
	backgroundColor: "#fff"
	
}); 


var navWindow = Ti.UI.iOS.createNavigationWindow
({
	
	window: mainWin
	
});


var BackgroundView = Ti.UI.createView
({
	
	backgroundColor: "#474145",
	width:"100%",
	height: "100%"
	
});


var FirstButton = Ti.UI.createView
({
	
	backgroundColor: "#26447C",
    top: 0,
	width:  "100%",
	height: 80
	
});


var SecondButton = Ti.UI.createView
({
	
	backgroundColor: "#473226",
    top: FirstButton.height,
	width:  "100%",
	height: 80
	
});


var ThirdButton = Ti.UI.createView
({
	
	backgroundColor: "#B23352",
    top: FirstButton.height + SecondButton.height,
	width:  "100%",
	height: 80
	
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var FirstButtonLabel = Ti.UI.createLabel
({		
	
 		textAlign:'center',
 		text: "Edit",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var SecondButtonLabel = Ti.UI.createLabel
({		
	
 		textAlign:'center',
 		text: "Read",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var ThirdButtonLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "Write",
 		color: "#FFFFFF",
 		font: {fontSize: 40, fontFamily: "Futura" },
 		zIndex: 1
 		
});


var BottomLabel = Ti.UI.createLabel
({ 		
		
 		textAlign:'center',
 		text: "ASDI Term 1408//Emin Jusufi",
 		color: "#FFFFFF",
 		font: {fontSize: 20, fontFamily: "Futura" },
 		bottom: 50,
 		zIndex: 1
 		
});


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var FMove = function()
{
	
	var GWin = Ti.UI.createWindow
	({
		title: "Edit",
		backgroundColor: "#474145",
		url: "EDB.js"
	});		
	
	navWindow.add(GWin);
	navWindow.openWindow(GWin);
	
};

var SMove = function()
{
	
	
	var G2 = Ti.UI.createWindow
	({
		title: "Read",
		backgroundColor: "#474145",
		url: "RDB.js",
		
	});		
	
	navWindow.add(G2);
	navWindow.openWindow(G2);
	
};

var TMove = function()
{
	
	var G3 = Ti.UI.createWindow
	({
		title: "Write",
		backgroundColor: "#474145",
		url: "WDB.js"
	});		
	
	navWindow.add(G3);
	navWindow.openWindow(G3);
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////



FirstButton.add(FirstButtonLabel);
SecondButton.add(SecondButtonLabel);
ThirdButton.add(ThirdButtonLabel);

ThirdButton.addEventListener("click", TMove);
SecondButton.addEventListener("click", SMove);
FirstButton.addEventListener("click", FMove);

mainWin.add(BackgroundView,FirstButton,SecondButton,ThirdButton,BottomLabel);

navWindow.open();

