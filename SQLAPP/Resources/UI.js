var tableData = Ti.UI.createTableView
({
	backroundColor: "#fff",
	height: Ti.UI.FILL
});

var HeroTbl = function(hData)
{
	var TData = [];
	
	for (i in hData)
	{
		
		console.log(hData[i].Name);
		
		var tblRow = Ti.UI.createTableViewRow
		({
			id: hData[i].id,
			width: Ti.UI.FILL,
			height: '50dp'
		});
		
		var tblView = Ti.UI.createView
		({
			
			left: "15dp",
			top: "5dp",
			height: Ti.UI.FILL, 
			width: Ti.UI.FILL			
		});
		
		var NameL = Ti.UI.createLabel
		({
			text: hData[i].Name,
			color : "#336699",
			font: {fontSize: 15, fontFamily: "Futura"},
			width: "100%"	,
			top: 0		
		});
		
		var SPL = Ti.UI.createLabel
		({
			text: hData[i].Speed,
			font: {fontSize: 9, fontFamily: "Futura" },
			left: 50,
			bottom: 0
		});
		
		var STL = Ti.UI.createLabel
		({
			text: hData[i].Power,
			font: {fontSize: 9, fontFamily: "Futura" },
			left: 50,
			bottom: 10
		});
		
		var ST0 = Ti.UI.createLabel
		({
			text: "Speed",
			font: {fontSize: 9, fontFamily: "Futura" },
			left: 0,
			bottom: 0
		});
		
		var SL0 = Ti.UI.createLabel
		({
			text: "Power",
			font: {fontSize: 9, fontFamily: "Futura" },
			left: 0,
			bottom: 10
		});
		
		
		
		tblView.add(NameL);
		tblView.add(ST0);
		tblView.add(STL);		
		tblView.add(SL0);
		tblView.add(SPL);
		tblRow.add(tblView);
		TData.push(tblRow);
	}
	tableData.setData(TData);
};
exports.tableData = tableData;
exports.HeroTbl = HeroTbl;


//Insert Form

exports.nameLabel = Ti.UI.createLabel
({
	text: "Name",
	
	color: '#336699',
	
	top: 20,
	
	textAlign: "left"
});

exports.nameField = Ti.UI.createTextField
({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,  
	
  	color: '#336699',
  	
 	top: 50 ,
 	
  	width: 200, 
  	
  	height: 20
});

exports.SPLabel = Ti.UI.createLabel
({
	text: "Speed",
	
	color: '#336699',
		
	top: 90,

	textAlign: "left"
});

exports.SPField = Ti.UI.createTextField
({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,  
  	
 	top: 120,
 	
 	color: '#336699',
 	
  	width: 200, 
  	
  	height: 20
});

exports.STLabel = Ti.UI.createLabel
({
	text: 'Power',	
	
	color: '#336699',
	
	top: 160,
	
	textAlign: "left"
});

exports.STField = Ti.UI.createTextField
({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,  
  	
 	top: 190, 
 	
 	color: '#336699',
 	
  	width: 200, 
  	
  	height: 20
});


exports.button = Ti.UI.createButton
({
	title: 'Add person',
	font: {fontSize: 15, fontFamily: "Futura", fontColor: '#0D427E' },
	top: 230,

});




