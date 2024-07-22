// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);


var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

function Book(title, author) {
    this.title = title;
    this.author = author;
}

var book1 = new Book("The Hobbit", "J. R. R. Tolkien");
var book2 = new Book("1984", "George Orwell");
var book3 = new Book("To Kill a Mockingbird", "Harper Lee");

console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);
console.log(book3.title + " by " + book3.author);


/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */