// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));

var message = "We choose to go to the Moon!";

var indexGo = message.indexOf("go");

console.log("Index of 'go':", indexGo);

var message = "We choose to go to the Moon!";

var indexChoose = message.indexOf("choose");

var chooseWord = message.substr(indexChoose, 6); // 'choose' is 6 characters long

console.log("The word 'choose':", chooseWord);

var message = "We choose to go to the Moon!";

var lastIndex = message.lastIndexOf("oo");

console.log("Index of 'oo' in 'Moon':", lastIndex);


/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */