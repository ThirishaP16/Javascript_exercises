// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);

var showLarger = function(num1, num2) {
    var larger = Math.max(num1, num2);
    var smaller = Math.min(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

showLarger(12, 3);    
showLarger(-10, 3);   
showLarger(5, 5);     
showLarger(0, -5);    

var showSmallest = function(num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);
    console.log(smallest + " is the smallest among " + num1 + ", " + num2 + ", and " + num3);
};

showSmallest(5, 3, 9);     
showSmallest(-10, 0, 3);   
showSmallest(1, 1, 1);     
showSmallest(0, -5, 10);   

/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */