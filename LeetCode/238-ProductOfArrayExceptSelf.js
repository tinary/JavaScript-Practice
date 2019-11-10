/*
Given an array nums of n integers where n > 1,  
return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? 
(The output array does not count as extra space for the purpose of space complexity analysis.)
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let arr = [];
    var p = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            nums.splice(i, 1);
        }
        p *= nums[i];
        for (j = i + 1; j < nums.length; j++) {
            let prod = nums[i] * nums[j];
            arr.push(prod);
        }
    }
    arr.push(p);
    return arr.sort((a, b) => b - a);
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([1,0]));