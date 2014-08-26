Ti.UI.setBackgroundColor("#777");

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//creates windows and tab groups
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var win1 = Ti.UI.createWindow
({	
	
	title: "Database",
	backgroundColor: "#fff", 
	layout: 'vertical'
	
}); 

var win2 = Ti.UI.createWindow
({	
	backgroundColor: "#fff", 
}); 

var tabGroup = Ti.UI.createTabGroup();

var tab1 = Ti.UI.createTab
({
	
	title: 'people',
	window: win1	
});

var tab2 = Ti.UI.createTab
({
	
	title: 'Add',
	window: win2	
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// load UI/DB js file - creates listener to check for button click 
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

var UI1 = require('UI');
var data = require('DB');
data.read();



UI1.button.addEventListener("click", function(e){
	if(UI1.button.edit != true)
	{
		alert('create');
		var newTitle = UI1.nameField.value;
		var newSpeed = UI1.SPField.value;
		var newPower = UI1.STField.value;
		UI1.nameField.value = "";
		UI1.SPField.value = "";
		UI1.STField.value = "";
		
		data.create( newTitle, newSpeed, newPower);
		data.read();
	}
	else
	{
		UI1.tableData.removeAllChildren();
		data.update(UI1.button.index, UI1.button.location);
	}
});

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
// creates listener on tabledata and uses event propogation to check row then prompts user
// and allows for changing or deleting of row data and updates database
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

UI1.tableData.addEventListener("click", function(e)
{
	var dialog = Ti.UI.createAlertDialog({
		cancel: 2,
		buttonNames: ["Update", "Delete", "Cancel"],
		message: "Edit Person",
		title: "Edit Person"
	});
	
	
	
	
	dialog.addEventListener("click", function(evt)
	{
		if(evt.index === 0) 
		{
			for(i in e.row.children)
			{
				var views = e.row.children[i];
				UI1.nameField.value = views.children[0].text;
				UI1.STField.value = views.children[1].int;
				UI1.SPField.value = views.children[2].int;
			}
			UI1.button.title = "Update";
			UI1.button.id = e.row.id;
			UI1.button.edit = true;
			UI1.button.index = e.index;
			win2.title = "Update";
			tab2.title = "Update";
			tabGroup.setActiveTab(tab2);
			
		}
		
		if(evt.index === 1)
		{
			var confirmDelete = Ti.UI.createAlertDialog
			({
				cancel: 1,
				buttonNames: ["Ok", "Cancel"],
				message: "Delete Hero",
				title: "Delete Hero"
			});
			
			confirmDelete.addEventListener("click", function(evt2)
			{
				if (evt2.index === 0) {
					UI1.button.id = e.row.id;
					data.del(UI1.button.id);
					console.log("delete");
				}
			});
		    confirmDelete.show();
		}
	});
	dialog.show();
});




win1.add(UI1.tableData);

win2.add(UI1.nameLabel);
win2.add(UI1.nameField);

win2.add(UI1.STLabel);
win2.add(UI1.STField);

win2.add(UI1.SPLabel);
win2.add(UI1.SPField);

win2.add(UI1.button);


