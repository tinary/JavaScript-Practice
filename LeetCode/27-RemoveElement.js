

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i, 1);
          i--;
      }
  }
  return nums;
};


// const nums = [3,2,2,3];
// const val = 3;
// console.log(removeElement(nums, val));


// const nums2 = [0,1,2,2,3,0,4,2];
// const val2 = 2;
// console.log(removeElement(nums2, val2));



var removeElement2 = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== val) {
          nums[i] = nums[j];
          i++;
      }
     // console.log(nums);
  }
  return i;
};

const nums3 = [3,2,2,3];
const val3 = 3;
console.log(removeElement2(nums3, val3));


// const nums4 = [0,1,2,2,3,0,4,2];
// const val4 = 2;
// console.log(removeElement2(nums2, val2));