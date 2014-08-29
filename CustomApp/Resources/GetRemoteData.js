//////////////////////////////////////////////////////URL String
var URL = "http://api.reddit.com/r/gifs";
var D1 = require("DB");

var showPic = function(event)
{
	
	var nWin = Ti.UI.createWindow
	({
		backgroundColor: "#F8F8F8"
	});
	
	var img = Ti.UI.createWebView
	({
		top: 50,
		width: "100%",
		url: event.source.picture,
		hideLoadIndicator: true
	});
	
	var LL = Ti.UI.createLabel
	({
		text: "Close",
		color: "#F8F8F8",
		font: {fontSize: 20},
		bottom: 3,		
	});
	
	var FF = Ti.UI.createView
	({
		height: 30,
		backgroundColor: "#B32239",
		bottom: 0
	});	
	
	var FF2 = Ti.UI.createView
	({
		height: 50,
		backgroundColor: "#B32239",
		top: 0
	});	
	
	var LL2 = Ti.UI.createLabel
	({
		text: "Save",
		color: "#F8F8F8",
		font: {fontSize: 20},
		Top: 25,		
	});

	FF.add(LL);	
	FF2.add(LL2);	
	nWin.add(img,FF,FF2);
	nWin.open();
	
	
	LL2.addEventListener("click", function() 
	{
		
		var confirmAdd = Ti.UI.createAlertDialog
			({
				cancel: 1,
				buttonNames: ["Ok", "Cancel"],
				message: "Save",
				title: "Save Gif Link"
			});
			
		confirmAdd.addEventListener("click", function(evt2)
		{
			if (evt2.index === 0) 
			{
				var P = event.source.picture;
				var C = event.source.text;
				D1.create(P,C);
				D1.read();
				console.log("Yes");
			}
		});
	    confirmAdd.show();
		         
	});
	
	
	LL.addEventListener("click", function() 
	{
		nWin.close();	  
	});
	
};




//////////////////////////////////////////////////////Get Data
var success = function()
{
	//parses json then gets title and pic and adds it to a scrollview with a for loop
	
	var SData = JSON.parse(this.responseText);
	var posts = SData.data.children;
	
	for(var i = 0; i < posts.length; i++)
	{
		
		var pic = posts[i].data.url;
		var lin = posts[i].data.permalink;	
		var endStr = pic.substring((pic.length - 3), pic.length);

		if(endStr === "gif")
		{
			
			var title = posts[i].data.title;
		
		
			var view = Ti.UI.createView
			({
				backgroundColor: "#fff",
				bottom: 3,
				height: Ti.UI.SIZE,
			});
			
			
			var label = Ti.UI.createLabel
			({
				text: title,
				color: "black",
				font: {fontSize: 14},
				top: 3,
				bottom: 3,
				left: 10,
				right: 10,
				textAlign: "center",
				picture: pic,
				height: "auto"
				
			});			
			
			view.add(label);
			scroll.add(view);
			label.addEventListener("click", showPic);
			
		}	
				
	}
	
};

//////////////////////////////////////////////////////Get Data Error
var error = function()
{
	alert("Something went wrong.");
};
var client = Ti.Network.createHTTPClient
({
	onload: success,
	onerror: error,
	timeout: 5000
});


client.open ("GET", URL);
client.send();
