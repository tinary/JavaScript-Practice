/*
  Calculate the differences of two dates 
*/

var differenceInDays, daysBeforeSunday, daysAfterSunday;
var t_DocTime = new Date(2020, 2, 7);
console.log(`Document start day is: ${t_DocTime} \n`);
var todayDate = getTodayDate();
console.log(`Current today's day is: ${todayDate}\n`);

daysBeforeSunday = (7 - t_DocTime.getDay()) % 7;
daysAfterSunday = todayDate.getDay();

differenceInDays = todayDate - t_DocTime;
differenceInDays = differenceInDays / (1000 * 3600 * 24);  //(1000mS * 60sec * 60min * 24hrs)					
differenceInDays -= (daysBeforeSunday + daysAfterSunday);
differenceInDays = (differenceInDays / 7) * 5;
differenceInDays += weekdayOnly(daysBeforeSunday - 1, -1, 0) + weekdayOnly(daysAfterSunday, 6, 5);

// Find business in days
var businessDays = Math.round(differenceInDays);
console.log(`Business In Days: ${businessDays}`);



// Define current date
function getTodayDate() {
  let todayDate = new Date();
  return todayDate;
}


// Helper function for business days calculation
function weekdayOnly(a, b, c) {
  return a == b ? c : a;
}