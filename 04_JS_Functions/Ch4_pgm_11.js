// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1 = {
    question: "What is the capital of France?",
    options: ["Bordeaux", "F", "Paris", "Brussels"],
    correctAnswer: "Paris"
};

var question2 = {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "Jupiter"
};

var question3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Charles Dickens", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
};

var currentQuestion;
var showQuestion;

showQuestion = function () {
    console.log("Question: " + currentQuestion.question);
    console.log("------------------------------");
    console.log("Options:");
    for (var i = 0; i < currentQuestion.options.length; i++) {
        console.log("(" + (i + 1) + ") " + currentQuestion.options[i]);
    }
    console.log("------------------------------");
};

currentQuestion = question1;
showQuestion();

currentQuestion = question2;
showQuestion();

currentQuestion = question3;
showQuestion();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */