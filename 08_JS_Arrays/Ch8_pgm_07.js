// Iterating over an array with forEach

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow);
};

items.forEach(showInfo);

var items;
var showInfo;

items = [
  "The Pyramids",
  "The Grand Canyon",
  "Bondi Beach"
];

showInfo = function (itemToShow) {
    console.log(itemToShow + " - " + itemToShow.length + " letters");
};

function getTotalLetters(arr) {
    var total = 0;
    arr.forEach(function(item) {
        total += item.length;
    });
    return total;
}

items.push("Eiffel Tower", "Machu Picchu");
items[3] = "Statue of Liberty";

items.forEach(showInfo);

var totalLetters = getTotalLetters(items);
console.log("Total number of letters: " + totalLetters);


/* Further Adventures
 *
 * 1) Add a few extra items to the array, some
 *    using push and some using square brackets.
 *    Run the program.
 *
 * Strings also have a length property
 * which gives the number of characters in the string.
 *
 * 2) Update the showInfo function to also
 *    display the number of letters in each item.
 *
 * 3) Write a new function that finds the total
 *    number of letters of the elements in
 *    the items array.
 *
 */