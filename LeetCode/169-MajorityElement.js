/*
Given an array of size n, find the majority element. 
The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let counts = {};
    let compare = 0;
    let mostFrequent;

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (counts[n] === undefined) {
            counts[n] = 1;
        }
        else {
            counts[n] = counts[n] + 1;
        }

        if (counts[nums[i]] > compare) {
            compare = counts[nums[i]];
            mostFrequent = nums[i];
        }
    }
    return mostFrequent;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2,2,1,1,1,2,2]));