/*
Given an array and a size, split the array items into a list of arrays of the given size.
describe("Array Chunking", () => {
 it("Should implement array chunking", () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
  assert.deepEqual(chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
  assert.deepEqual(chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
 });
});

*/

/**
 * @param {array} array
 * @param {number} size
 * @return {array}
 */

const chunk = function(array, size) {
    let index = 0;
    let chunkArray = [];
    while (index < array.length) {
        chunkArray.push(array.slice(index, (index + size)));
        index = index + size;
    }
    return chunkArray;
};

// runtime is O(n)

console.log(chunk([1, 2, 3, 4], 2));
console.log(chunk([1, 2, 3, 4], 3));
console.log(chunk([1, 2, 3, 4], 5));
console.log(chunk([1, 2, 3, 4, 5, 6], 4));
