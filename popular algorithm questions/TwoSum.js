/* 
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});

*/

/**
 * @param {number[]} A
 * @param {number} N
 * @return {number[]}
 */

const twoSum = function(A, N) {
    let sum = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] + A[j] === N) {
                sum.push([A[i], A[j]]);
            }
        }
    }
    return sum;
};
//run time: O(n^2)

console.log(twoSum([1, 2, 2, 3, 4], 4));
console.log(twoSum([0, 1, 2, 2, 3, 5, 3, 6], 6));



// improve run time by using hash map
const twoSum2 = function(A, N) {
    let pairs = [];
    let store = [];
    for (let part1 of A) {
        let part2 = N - part1;
        if (store.indexOf(part2) !== -1) {
            pairs.push([part1, part2]);
        }
        else {
            store.push(part1);
        }
    }
    return pairs;
};
//runtime O(n)

console.log(twoSum2([1, 2, 2, 3, 4], 4));
console.log(twoSum2([0, 1, 2, 2, 3, 5, 3, 6], 6));