/*
Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(function(a, b) {
        //let ab = a.toString() + b.toString();
        //let ba = b.toString() + a.toString();
        //return ba - ab;
        return (b + '' + a ) - (a + '' + b);   // sorted with largest digit into string
    });

    let result = nums.join('');

    if (parseInt(result) === 0) {
        return '0';
    }
    else {
        return result;
    }
  };

  console.log(largestNumber([3,30,34,5,9]));
  console.log(largestNumber([1, 2, 4, 10, 50, 32, 34]));
  console.log(largestNumber([0, 0, 0]));