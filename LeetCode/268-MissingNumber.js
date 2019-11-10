/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let sum1 = (n * (n + 1)) / 2;   // use series sequence formula
    let sum2 = nums.reduce((a ,b) => a + b);
    return sum1 - sum2;
};

console.log(missingNumber([3,0,1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([3,2,1]));
console.log(missingNumber([0]));
console.log(missingNumber([0, 1]));