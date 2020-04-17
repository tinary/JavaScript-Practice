/*
Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by 
the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay),
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/


/**
 * @param {number} n
 * @return {boolean}
 */



var isHappy = function (n) {
  let num = [];
  let sqrNum = [];

  while (n > 1) {
    let number = n;
    while (number > 0) {
      num.push(number % 10);
      number = Math.floor(number / 10);
    }

    if (num.length < 2 && num[0] != 7){
      return false;
    }
    else {
      for (let i = 0; i < num.length; i++) {
        sqrNum.push(num[i] * num[i]);
      }
  
      n = sqrNum.reduce(function (a, b) {
        return a + b;
      }, 0);

    }
    num = [];
    sqrNum = [];
  }

  if (n === 1) {
    return true;
  }
  else {
    return false;
  }
};


console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(7));