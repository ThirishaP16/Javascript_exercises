// Calling the sayHello function three times

var sayHello;

sayHello = function () {
	console.log("Hello World!");
};

sayHello();
sayHello();
sayHello();

var sayHello;

sayHello = function () {
	console.log("Greetings, Earthling!");
};

sayHello();
sayHello();
sayHello();

var sayHello;

sayHello = function () {
	console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();

var printVertical;

printVertical = function (text) {
    for (var i = 0; i < text.length; i++) {
        console.log(text.charAt(i));
    }
};

printVertical("Hello World!");


/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */