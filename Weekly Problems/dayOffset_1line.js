/*
Write a function that takes the name of a day (e.g "Monday", "Tuesday") and an integer offset, 
and returns the name of the day which would be the original + offset.

Extra credit: do it in 1 line!

Example:
> dayOffset("Wednesday", 4)
> "Sunday"
*/

var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const dayOffset = (s, n) => {return week[(week.indexOf(s) + (n + 364)) % 7];}


console.log(dayOffset('Wednesday', 4));
console.log(dayOffset('Wednesday', -5));
console.log(dayOffset('Tuesday', 14));
console.log(dayOffset('Monday', -15));
console.log(dayOffset('Monday', 0));
console.log(dayOffset('Monday', -1));
console.log(dayOffset('Sunday', -7));