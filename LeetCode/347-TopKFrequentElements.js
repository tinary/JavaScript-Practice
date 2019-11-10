/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent1 = function(nums, k) {
    let hashMap = {};
    let array = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = 1;
        }
        else {
            hashMap[nums[i]] += 1;
        }       
    }

    for (let key in hashMap) {
        array.push({key: key, value: hashMap[key]});
    }
    
    array.sort(function(a,b) {
        return b.value - a.value;
    })

    for (let i = 0; i < k; i++) {
        result.push(Number(array[i].key));
    }

    return result;
};
console.log(topKFrequent1([1,1,1,2,2,3], 2));



// Other person's solution
var topKFrequent = function(nums, k) {
    let dict = {};
    let results = [];
    
    /*for (let num of nums) {
        dict[num] = dict[num] + 1 || 1;
    }*/

    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]] === undefined) {
            dict[nums[i]] = 1;
        }
        else {
            dict[nums[i]] += 1;
        }       
    }
    
    let sorted = Object.entries(dict).sort((a, b) => {
        return b[1] - a[1];
    });

    for(let i = 0; i < k; i++) {
        results.push(Number(sorted[i][0]));
    }
    return results;   
};

console.log(topKFrequent([1,1,1,2,2,3], 2));


