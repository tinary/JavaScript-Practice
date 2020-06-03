/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             const zero = nums.splice(i, 1);
//             nums.push(zero);
//             i--
//         }
//     }
//     return nums
// };

// let nums = [0,1,0,3,12];
// console.log(moveZeroes(nums));


// in-place swap method
// Find non zero numbers and count it.
// The count is index of non zero numbers.
// use bubble sort
var moveZeroes2 = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            //[nums[j], nums[i]] = [nums[i], nums[j]]
            j++;
        }
    }
    return nums;
};

let nums = [0,1,0,3,12];
console.log(moveZeroes2(nums));

// console.log(moveZeroes2([0,0,1,0]));