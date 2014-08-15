//////////////////////////////////////////////////////URL String
var URL = "http://api.reddit.com/r/gifs";

///////////////////Gets clicked object picture and adds it to a webview to display gif
var showPic = function(event)
{
	var nWin = Ti.UI.createWindow
	({
		backgroundColor: "#fff"
	});
	
	var img = Ti.UI.createWebView
	({
		top: 40,
		width: "100%",
		url: event.source.picture,
		hideLoadIndicator: true
	});
	var LL = Ti.UI.createLabel
	({
		text: "Close",
		color: "black",
		font: {fontSize: 20},
		bottom: 3,		
	});
	var FF = Ti.UI.createView
	({
		height: 30,
		backgroundColor: "#ccc",
		bottom: 0
	});	
	
	FF.add(LL);		
	nWin.add(img,FF);
	nWin.open();
	
	LL.addEventListener("click", function() 
	{
		
		nWin.close();	  
	});
	
};



var showCom = function(event)
{
	
	var scroll2 = Ti.UI.createScrollView
		({
			top: 0,
			bottom: 30,
			layout: "vertical"
		});
		var LL2 = Ti.UI.createLabel
		({
			text: "Close",
			color: "black",
			font: {fontSize: 20},
			top: 0,
			bottom: 18,		
		});
	
	win2.add(scroll2);
	win2.add(LL2);
	
	
	var URL2 = "http://api.reddit.com" + event.source.link;	
	
	var s = function()
	{
			
		//parses json 	
		var Data = JSON.parse(this.responseText);
		var post = Data[1].data.children;
		var Ar = [];
		for(var i = 0; i < post.length; i++)
		{
			var Bod = post[i].data.body;
			var Ath = post[i].data.author;
						
			var view2 = Ti.UI.createView
			({
				backgroundColor: "#fff",
				bottom: 3,
				height: Ti.UI.SIZE,
			});		
			
			var BB2 = Ti.UI.createLabel
			({
				   text: Ath,
				   color: "Red",
				   width: "100%",
				   font: {fontSize: 10},
				   top: 5,
				   height: "auto"
			});			
			
			var label2 = Ti.UI.createLabel
			({
				text: Bod,
				color: "black",
				width: "100%",
				font: {fontSize: 12},
				top: 20 + BB2.height,
				height: "auto"				
			});	
			
			view2.add(BB2,label2);
			scroll2.add(view2);
			win2.open();
		}	
		
		LL2.addEventListener("click", function() 
		{	    		
	    	win2.remove(scroll2);
	    	win2.remove(LL2);
			win2.close();	  
		});	
				
	};	
	
	var error2 = function()
	{
		alert("Something went wrong.");
	};
	
	var client2 = Ti.Network.createHTTPClient
	({
		onload: s,
		onerror: error2,
		timeout: 5000
	});	
	
	client2.open ("GET", URL2);
	client2.send();			
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
				right: 60,
				textAlign: "left",
				picture: pic,
				height: "auto"
				
			});
			
			
			var BB = Ti.UI.createLabel
			({
				   text: 'Comments',
				   color: "Red",
				   font: {fontSize: 10},
				   left: label.width + 5,
				   right: 5,
				   link: lin,
				   height: "auto"
			});
			
			
			view.add(BB,label);
			scroll.add(view);
			label.addEventListener("click", showPic);
			BB.addEventListener("click", showCom);	
			
		}	
				
	}
	
};

//////////////////////////////////////////////////////Get Data Error
var error = function()
{
	alert("Something went wrong.");
};

//////////////////////////////////////////////////////Create Second Tab
var client = Ti.Network.createHTTPClient
({
	onload: success,
	onerror: error,
	timeout: 5000
});


client.open ("GET", URL);
client.send();
