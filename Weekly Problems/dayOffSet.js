/*
Write a function that takes the name of a day (e.g "Monday", "Tuesday") and an integer offset, 
and returns the name of the day which would be the original + offset.

Example:
> dayOffset("Wednesday", 4)
> "Sunday"
*/

var week = {'Monday':1, 'Tuesday':2, 'Wednesday':3, 'Thursday':4, 'Friday':5, 'Saturday':6, 'Sunday':7};

function dayOffset(s, n) {
    var date = 0;
    var weekLength = Object.keys(week).length;
    for (let i = 0; i < weekLength; i++) {
        if (s === Object.keys(week)[i]) {
            date = Object.values(week)[i] + n;
            if (date === 0) {
                date = date + 7;
            }
            while (date > 7) {
                date = date - 7;
            }
            while (date < 0) {
                date = date + 7;
                if (date === -7) {
                    date = Math.abs(date);
                }
            }
        }
    }
    return Object.keys(week).find(key => week[key] === date);
}

console.log(dayOffset('Wednesday', 4));
console.log(dayOffset('Wednesday', -5));
console.log(dayOffset('Tuesday', 14));
console.log(dayOffset('Monday', -15));
console.log(dayOffset('Monday', 0));
console.log(dayOffset('Monday', -1));
console.log(dayOffset('Sunday', -7));
