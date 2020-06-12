/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  let i = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k]; 
        //console.log(sum);
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  console.log(result);

  // return result;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));