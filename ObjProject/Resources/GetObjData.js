//Objects contain one string with a sentence and a description of the object.
var Gender = 
{
	"Gender": function(MF){ var gen = ("I am a " + MF + ". "); return gen;},
	"Des": function() {Des = "gender."; return Des;}
};

var Home = 
{
	"Type": function(type){var types = ("Who lives in an " + type + ". "); return types;},
	"Des": function() {Des = "type of home"; return Des;}
};

var Size = 
{
	"Size": function(Size){var size = ("Its a relatively " + Size + " home. "); return size;},
	"Des": function() {Des = "comparing the size"; return Des;}
};

var Rooms = 
{
	"NumR": function(NumR){var num = ("It Has " + NumR + " rooms. "); return num;},
	"Des": function() {Des = "Number of rooms"; return Des;}
};

var Seats = 
{
	"TOSeats": function(NumR,NumC){var number = ("It Has " + NumR + " recliners and " + NumC + " couches. "); return number;},
	"Des": function() {Des = "Number of seats"; return Des;}
};

//Dot Notation
var Pets = new Object();

	Pets.Kind = function(PetK){var Pet = ("I love " + PetK + ". "); return Pet;};
	Pets.Des = function() {Des = "kind of pet"; return Des;};


var PetsOwned = new Object();

	PetsOwned.Number = function(Num){var NPet = ("I have " + Num + " of them. "); return NPet;};
	PetsOwned.Des = function() {Des = "Number of pets"; return Des;};



var TvType = new Object();

	TvType.Kind = function(Spec){var TT = ("I own a " + Spec + ". "); return TT;};
	TvType.Des = function() {Des = "kind of Tv"; return Des;};


var ConsoleName = new Object();

	ConsoleName.Kind = function(CName){var CN = ("I own a " + CName + ". "); return CN;};
	ConsoleName.Des = function() {Des = "name of my video game console"; return Des;};
 
 

var GamesOwned = new Object();

	GamesOwned.Num = function(Num){var GO = ("I have " + Num + " games for it. "); return GO;};
	GamesOwned.Des = function(Des) {Des = "number of games I have."; return Des;};



//Setting object data
var ObjectOne = Gender.Gender("male");
var ObjectOneD = Gender.Des();

var ObjectTwo = Home.Type("apartment");
var ObjectTwoD = Home.Des();

var ObjectThree = Size.Size("small");
var ObjectThreeD = Size.Des();

var ObjectFour = Rooms.NumR(3);
var ObjectFourD = Rooms.Des();

var ObjectFive = Seats.TOSeats(2, 2);
var ObjectFiveD = Seats.Des();

var ObjectSix = Pets.Kind("cats");
var ObjectSixD = Pets.Des();

var ObjectSeven = PetsOwned.Number(3);
var ObjectSevenD = PetsOwned.Des();

var ObjectEight = TvType.Kind("HDTV");
var ObjectEightD = TvType.Des();

var ObjectNine = ConsoleName.Kind("Playstation");
var ObjectNineD = ConsoleName.Des();

var ObjectTen = GamesOwned.Num(30);
var ObjectTenD = GamesOwned.Des();



var Output = 

ObjectOne + "Which describes my " + ObjectOneD + "\n" +  "\n" + 

ObjectTwo + "Which describes the " + ObjectTwoD + " I have." + "\n" +  "\n" + 

ObjectThree + "When " + ObjectThreeD + " of these types of homes." + "\n" + "\n" + 

ObjectFour + "Which is " + ObjectFourD + " I have." + "\n" +  "\n" + 

ObjectFive + "Which is the " + ObjectFiveD + " I have." + "\n" +  "\n" + 

ObjectSix + "Which is the " + ObjectSixD + " I like." + "\n" +  "\n" + 

ObjectSeven + "Which is the " + ObjectSevenD + " I own." + "\n" + "\n" + 

ObjectEight + "Which is the " + ObjectEightD + " I have." + "\n" + "\n" + 

ObjectNine + "Which is the " + ObjectNineD + " I like." + "\n" + "\n" + 

ObjectTen + "Which is the " + ObjectTen;

exports.msg = Output;
