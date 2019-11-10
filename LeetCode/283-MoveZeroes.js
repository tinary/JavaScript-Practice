/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeros = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(nums.splice(i, 1));
        }
    }
    return nums.concat(zeros[0]);
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));