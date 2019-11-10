/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    return nums.splice(nums.length - k).concat(nums.splice(0, nums.length));
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));


var rotate2 = function (nums, k) {
    nums.unshift(...nums.splice(nums.length - k));
    return nums;
};

console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate2([-1, -100, 3, 99], 2));