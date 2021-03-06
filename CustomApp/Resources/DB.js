Ti.Database.install("/Data/RD.sqlite", "RD");


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//read
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var TD = [];
var read = function()
{	
		
	var DB = Ti.Database.open("RD");
	
	var Row = DB.execute("SELECT id, link, title FROM RT");
	
	while (Row.isValidRow())
	{
		TD.push
		({
			id: Row.fieldByName("id"),
			link: Row.fieldByName("link"),
			title: Row.fieldByName("title")
		});		
		Row.next();		
	}
	
	Row.close();
	DB.close();	
};
exports.read = read;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Create 
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


var create = function(link, title) 
{
	var DB = Ti.Database.open('RD');
	
	DB.execute('INSERT INTO RT (link, title) VALUES (?,?)', link, title);
	
	var RowId = DB.lastInsertRowId;
	
	DB.close();
	
	TD = [];  	
};
exports.create = create;


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Delete 
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var del = function(id)
{
	var DB = Ti.Database.open('RD');
	
	DB.execute('DELETE FROM RT WHERE id=?', id.source.idi);
	
	DB.close();
	
	TD = [];
	
	read();	
	
}; 

exports.del = del;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Update 
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var update = function(T)
{
	var DB = Ti.Database.open('RD');
	
	DB.execute('UPDATE RT SET title=? WHERE id=?', T.value, T.id );
	DB.close();
	TD = [];
	read();
};
exports.update = update;

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Show Table 
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var showTable = function(e)
{
	
	
	
	var Win2 = Ti.UI.createWindow
	({
		oldWin: Ti.currentWindow,		
		backgroundColor: "#F8F8F8"
	});
			
	var sc = Ti.UI.createScrollView
	({
		height: Ti.Platform.displayCaps.platforHeight - header,
		layout: "vertical"
	});
		
	for (i in TD)
	{
			
			var P = TD[i].id;
			var C = parseInt(P);
			
			var view = Ti.UI.createView
			({
				
				backgroundColor: "#fff",
				bottom: 3,
				height: Ti.UI.SIZE,
			});
			
			var label = Ti.UI.createLabel
			({
				idi:  C,
				link: TD[i].link,
				text: TD[i].title,
				color: "black",
				font: {fontSize: 14},
				top: 3,
				bottom: 3,
				left: 10,
				right: 10,
				textAlign: "center",
				height: "auto"
			});			
			
			view.add(label);
			sc.add(view);	
			
			label.addEventListener("click", function(eve)
			{
					var confirm = Ti.UI.createAlertDialog
					({
						cancel: 0,
						buttonNames: ["Update", "Delete","Show"],
						message: "Save",
						title: "Save Gif Link"
					});
						
					confirm.addEventListener("click", function(evt2)
					{
						if (evt2.index === 0) 
						{
								showIP(eve);
								Win2.close();							
						}
						if (evt2.index === 1) 
						{
							console.log(eve);
							del(eve);
							Win2.close();
						}
						if (evt2.index === 2) 
						{
							showTP(eve);
						}						
					});
				    confirm.show();
			});	
	}	
	
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

	FF.add(LL);		
	Win2.add(sc, FF);
	
	Win2.open();
	
	LL.addEventListener("click", function() 
	{
		Win2.close();	  
	});
	
};

exports.ST = showTable;



//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Show Table Pic
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var showTP = function(event)
{
	
	var Win3 = Ti.UI.createWindow
	({
		oldWin: Ti.UI.currentWindow,		
		backgroundColor: "#F8F8F8"
	});
	
	var img = Ti.UI.createWebView
	({
		top: 50,
		width: "100%",
		url: event.source.link,
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
	
	FF.add(LL);	
	
	Win3.add(img,FF);
	Win3.open();
		
	LL.addEventListener("click", function() 
	{
		Win3.close();	  
	});
	
};


//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Show Input Pic
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var showIP = function(event)
{
	
	var Win4 = Ti.UI.createWindow
	({
        oldWin: Ti.UI.currentWindow,		
		backgroundColor: "#F8F8F8"
	});
	
	var LLT = Ti.UI.createTextField
	({
		
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, 
		 
		hintText: "Enter new Title",
		
		id: event.source.idi,
		
		font: {fontSize: 20},
		
		bottom: "50%",		
		
	});
	
	
	var LL = Ti.UI.createLabel
	({
		text: "Enter",
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
	
	FF.add(LL);	
	
	Win4.add( LLT,FF);
	Win4.open();
		
		
		
	LL.addEventListener("click", function(evs) 
	{
		read();		
		update(LLT);
		
		Win4.close();
		
		
		
	});
	
};

