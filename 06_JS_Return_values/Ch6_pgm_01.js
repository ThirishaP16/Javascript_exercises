// Returning a value from a function

var getMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

response = getMessage();

console.log(response);

var getMyMessage = function() {
    return "Hello from the other side!";
};

var getMessage;
var response;

getMessage = function () {
    return "I’m going on an adventure!";
};

var getMyMessage = function() {
    return "Hello from the other side!";
};

response = getMessage();

console.log(response);

getMessage()
"I’m going on an adventure!"

getMyMessage()
"Hello from the other side!"


/* Further Adventures
 *
 * 1) Write a getMyMessage function
 *    that returns a message of
 *    your choosing.
 *
 * We can call functions at the console prompt.
 * Run the program, then click in the Console panel
 * and enter commands after the prompt, >
 *
 * 2) Call getMessage at the prompt.
 *    
 *    > getMessage()
 *
 * When a function is called at the prompt,
 * its return value is displayed.
 *
 * 3) Call getMyMessage at the prompt.
 *
 */