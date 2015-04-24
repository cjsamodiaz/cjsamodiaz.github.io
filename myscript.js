// Do a couple of console.logs 

/*
console.log("Hello from myscript.js");
console.log("Hello again");
*/

/*
var name = prompt("What is your name?");
alert("Hello " + name);

name = "Nick";
console.log("The user name is " + name);
*/

/*
console.log("Before");

var name = prompt("What is your name?")
if(name) {
	console.log("If block");
} else {
	console.log("Else block");
}

console.log("After")
*/

/*
console.log("Before")

var counter = 10;

while(counter){
	console.log('Hello World!');
	console.log('Hi');
	counter = counter -1;
}

while (prompt("What is your name?")) {
	console.log("Got your name")
}

for (var counter=10;counter; counter = counter -1) {
	console.log("Hello World", counter)
}

console.log("After")
*/

/*****************
124.04
"Hello World"
true
false
alert()
prompt()
Array []
******************/

/*
var friends = ["Nick", "Micheal", "Amit", "Allison Grayce", "John"];
console.log(friends);
console.log(friends.length);

var friendNumber = 1;
console.log(friends[friendNumber]);

for(var i=0; i < friends.length ; i+=1) {
	console.log(friends[i]);
}
*/

/*
var me = {
	first_name: "Jim",
	last_name: "Hoskins",
	"Employee Number": 1
}

me["first_name"] = "James"

console.log(me.first_name);
console.log(me["last_name"]);
console.log(me["Employee Number"]);
console["log"](me);

var key = "last_name"

console.log(me[key])
*/

/*
var sayHello = function () {
	var message = "Hello";
	message = message + " World!";
	console.log(message);
}

var debug = function (message) {
	console.log("Debug", message);
}

var doubleNumber = function (num) {
	return num * 2;
}

debug(doubleNumber(26));

sayHello();

var x =1;
debug("x has been set")

sayHello();

x +=10;
var y =100;
debug("x has been increased. y has been increased")

sayHello();
*/

/* JavaScript Foundations: Variables */

/*
var color = "red";

var mydiv = document.getElementById('mydiv')
mydiv.style.background = "Black";
mydiv.style.color = "#ffff";
*/

// Starts with A-Z a-z _ $
// Continue with A-Z a-z 0-9 _ $

// Valid Variables
/*
var car = "Toyota";
var Color = "blue";
var _myVariable = "something";
var $specialName = 1;
var a58389 = "What is this?";
*/

// Invalid Varialble Names
// var 3colors = "red green blue";
// var winning% = 30;
// var person-name = "Jim";
// var @you = "are awesome!";

//var continue = true


/*
var myVar;

// undefined = true;

console.log(typeof myVar === "undefined");
console.log(myVar === undefined);

var x = null;

if(myVar === null){
	console.log("If");
} else {
	console.log("Else");
}
*/


//scope

/*
var world = "World!";

function sayHello() {
	var hello = "Hello ";

	function inner() {
	var extra = " There is more!";
	console.log(hello + world + extra);
 }

 inner ();
}

sayHello();

console.log("world outside sayHello(): ", world);
//console.log("hello outside sayHello(): ", hello);
*/

// Shadowing

/*
var myColor = "blue";
console.log("myColor before myFunc()", myColor);

function myFunc() {
	var myColor = "yellow";
	myNumber = 42;
	console.log("myColor inside my Func()", myColor);
}

myFunc();
console.log("myColor after myFunc()", myColor);
console.log("myNumber after myFunc()", myNumber);


var person = "Jim";

function whosGotTheFunc() {
	var person = "Andrew";
	console.log(person);
}
whosGotTheFunc()



person = "Nick";

console.log(person);
*/

// Hoisting

/*
function doSomething (doit) {
	var color = "blue",
			number,
			name = "Jim";
	if(doit) {
		color = "red";
		number = 10;
		console.log("Color in if(){}", color)
	}
	console.log("Color after if(){}", color)
}

doSomething(false);
doSomething(true);
*/

// JavaScript Arrays

/*
var x = ['some', 'extra', 'words', 'here'];
console.log(x.length);

var y = ['a string', 3, ['a sub array', 2, 3, 4], 'treehouse',function(a, b){return a + b;}]

var z = [];

var a = new Array(50);
*/

/*
var my_array = ["Hello", 42, true, function (a) {return a * 2}];

var word = my_array[0];
var answer = my_array[1];
var doubler = my_array[3];
console.log(doubler(10));

my_array[1] = 144;
var new_answer = my_array[1];

my_array[my_array.length] = "A new String";
my_array[my_array.length] = "A new String";
my_array[my_array.length] = "A new String";
*/

    // var myArray = ["sugar", "rush", "fix", "it", 3.14, 42];
    // myArray[2] = 'thirdElementInArray';


/*
var my_array = [2, 3, 4]; 
console.log(my_array.toString());

my_array.push(5)
console.log(my_array.toString());

var value = my_array.pop();
console.log(my_array.toString());

var value2 = my_array.pop();
console.log(my_array.toString());

var value3 = my_array.pop();
console.log(my_array.toString());
*/

/*
var my_array = [2, 3, 4];
console.log(my_array.toString());

my_array.unshift(1);
console.log(my_array.toString());

var value = my_array.shift();
console.log(my_array.toString());
*/

/*
  var spareWords = ["The","chimney","sweep's","dog"];
  var saying = ["quick", "brown", "fox", "jumps", "over", "the", "lazy"];
  var firstWord = spareWords.shift();
  var lastWord = spareWords.pop();
  saying.unshift(firstWord);
  saying.push(lastWord);
 */

/*
 var my_array = [10, 44, 32, 100, 0, 44, 3, 4];
 console.log(my_array.toString());

 my_array.sort(function (a, b){
 	// return a - b; (ascending)
 	// return Math.random() - 0.5; (random)
 });
 console.log(my_array.toString());
 */

/*
 var my_array = [1, 2, 3, 4, 5]
 console.log(my_array.toString());

 // my_array.reverse(); (reverse)
 console.log(my_array.toString());
 */

/*
 var x = [1, 2, 3];
 var y = [4, 5, 6];
 var z = x.concat(4, 5, 6, 7, 8, 9, [10, 11, 12]);

 console.log(x);
 console.log(y);
 console.log(z);
 */

/*
 var my_array = [0, 1, 2, 3, 4, 5];
 var result = my_array.slice(2, 60);

 console.log(result);
 */

 // var words = ["these", "are", "some", "words", function(a){return a}];
 // var result = words.join(' ');

/*
 var my_array = [0, 1, 2, 3, 4, 5, 6];
 console.log(my_array.toString());

 my_array.splice(2, 1, 'two', 'TWO', 'something else'); // 3rd element is for insert

 console.log(my_array.toString());
*/

/* JavaScript Strings */

/*
var name = "Jim";
console.log(name);

var name2 = 'Jim';
console.log(name2);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said \"This is Jim\'s string\"';
console.log(statement3);

var path = "C:\\folder\\myfile.text";
console.log(path);

var multiline = "This is line 1\n" + 
	"This is line 2\n" + 
	"This \tis line 3";
console.log(multiline);

var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log(whole + "!!!!!");

var length = whole.length;
console.log(whole, length);

var index = whole.indexOf("World");
console.log(index);

var index = whole.indexOf("world");
console.log(index);

if (whole.indexOf("W") !== -1){
	console.log("W exists in string")
} else {
	console.log("W does not exist");
}

console.log(whole.charAt(1));

"Hello World!"
var world = whole.substr(6, 5);
console.log(world);

console.log(whole.toLowerCase());
console.log(whole.toUpperCase());
console.log(whole);

var quick = "The quick brown fox jumps over the lazy dog";
var quickLength	 = quick.length;
var indexOfBrown = quick.indexOf("brown");
var tenthCharacter = quick.charAt(9);
var wordBrown = quick.substr(10, 5);
	console.log(wordBrown);
var quickUpper = quick.toUpperCase();
var quickLower = quick.toLowerCase();
*/

/*
var first = "Hello"
var second = "hello"

if (first.toLowerCase() === second.toLowerCase()) {
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}

function compare(a, b) {
	console.log(a + " <= " + b, a <= b);
}

compare('a', 'b');
compare('a', 'A');
compare('apples', 'oranges');
compare('apples', 'applications');
compare('app', 'apples');
compare('hello', 'hello');
*/

/* Javascript Numbers */

/*
var a = 11;
		b = -123;

var c = 1.5;
var d = 123.456789;

var e = 5;
var f = 12.3;
var result = e * f;

var g = 1.23E16;

var h = 012;
// ff 00 00

var i = 0xff0000;

var j = parseInt("019");
var k = parseInt("010111", 8);
var l = parseInt("there are 23 people", 10);
console.log(l === NaN);

var m = 10 == "ten"; //false

*/

// Javascript function

/*
function sayHello (name, greeting) {
	if (typeof name === 'undefined'){
		return;
	}
	if (typeof greeting === 'undefined'){
		greeting = 'Hello';
	}
	console.log(greeting + " World! " + name);

	return name.length;
}

console.log(sayHello("James", "Greetings"));

console.log(sayHello("Jim"));

console.log(sayHello())
*/

/*
     function arrayCounter (array) {
        if (typeof array === 'string' ||typeof array === 'number' ||typeof array === 'undefined'){
        return 0;
      }
        return array.length;
      }
*/

/*
var color = 'black';
var number = 1;

console.log(color);

function showColor () {
	var color = 'green';
	var number = 2;

	console.log('showColor color', color);
	console.log('showColor number', number);
}

showColor();

console.log('Global color', color)
console.log('Global number', number)
*/

/*
 var myFunction = function  () {
	console.log('myFunction was called');
	undeclaredVariable;
}

var callTwice = function (targetFunction) {
	targetFunction();
	targetFunction();
}

callTwice(function namedFunction() {
	console.log("Hello from anon function");
	undeclaredVariable;
});
*/

/*
(function () {
	var a, b, c;
//...
	console.log('from anon function')
})(1, "hello");
*/

//Example

/*
var button = document.getElementById('action');
var input = document.getElementById('text_field');

button.addEventListener('click', function () {
	console.log('clicked');
});

button.addEventListener('click', function () {
	console.log('clicked');
	input.setAttribute('value', 'Hello World');
});

function example ( ) {
  var color = "red";
  return color;
}

example("blue");

console.log(color);
*/

/*
var animal = "cow";

function display (animal) {
  console.log(animal);
}

animal = "pig"

display("horse");
*/

/*
var nick = { 
	name: "Nick", 
	greet: function () {
		console.log("Hello, I am " + jim.name)
	}
};

jim.name = "James";

jim.greet("Hello " + jim.name);
*/

var personPrototype = {
	name: 'Anonymous',
	greet: function (name, mood) {
		name = name || "You";
		mood = mood || "good";

		console.log("Hello, " + name +
					" I am " + this.name +
					" and I am in a " + mood + " mood!");
	},

	species: 'Homo Sapien'
}

function Person (name){
	this.name = name;
}

Person.prototype = personPrototype;

jim = new Person("Jim")
nick = new Person("nick")
