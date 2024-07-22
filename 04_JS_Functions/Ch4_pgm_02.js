// Displaying information from similar objects

var movie1;
var movie2;
var movie3;

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

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

console.log("Movie information for " + movie3.title);
console.log("------------------------------");
console.log("Actors: " + movie3.actors);
console.log("Directors: " + movie3.directors);
console.log("------------------------------");

var event1 = {
  title: "Team Meeting",
  date: "2024-07-25",
  time: "10:00 AM",
  location: "Conference Room A"
};

var event2 = {
  title: "Lunch with Client",
  date: "2024-07-26",
  time: "12:30 PM",
  location: "Restaurant XYZ"
};

var event3 = {
  title: "Project Deadline",
  date: "2024-07-30",
  time: "5:00 PM",
  location: "Office"
};

console.log("\nCalendar Event 1:");
console.log("------------------------------");
console.log("Title: " + event1.title);
console.log("Date: " + event1.date);
console.log("Time: " + event1.time);
console.log("Location: " + event1.location);
console.log("------------------------------");

console.log("\nCalendar Event 2:");
console.log("------------------------------");
console.log("Title: " + event2.title);
console.log("Date: " + event2.date);
console.log("Time: " + event2.time);
console.log("Location: " + event2.location);
console.log("------------------------------");

console.log("\nCalendar Event 3:");
console.log("------------------------------");
console.log("Title: " + event3.title);
console.log("Date: " + event3.date);
console.log("Time: " + event3.time);
console.log("Location: " + event3.location);
console.log("------------------------------");


/* Further Adventures
 *
 * 1) Add a fourth movie and display its info
 *
 * 2) All the movie info is in one big block on the console.
 *    Change the code to space out the different movies.
 *
 * 3) Create objects to represent three calendar events
 *
 * 4) Display info from the three events on the console.
 *
 */