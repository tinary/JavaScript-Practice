/*
Given an array of items, reverse the order.
describe("Reverse Arrays", () => {
 it("Should reverse arrays", () => {
  assert.deepEqual(reverseArray([1, 2, 3, 4]), [4, 3, 2, 1]);
  assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
 });
});

*/

/**
 * @param {array} array
 * @return {array}
 */

 // use reverse method
 const reverseArray = function(A) {
     return A.reverse();
 };

 // try not to use reverse method. Can use stack method
 const reverseArray2 = function(A) {
     let reverse = [];
     while (A.length > 0) {
         let n = A.pop();
         reverse.push(n);
     }
     return reverse;
};

// try not to use any JS methods
// swap item beginning and end
const reverseArray3 = function(A) {
    for (let i = 0; i < (A.length / 2); i++) {
        const temp = A[i];
        A[i] = A[A.length - 1 - i];
        A[A.length - 1 - i] = temp;
    }
    return A;
};


 console.log(reverseArray3([1, 2, 3, 4]));
 console.log(reverseArray3([1, 2, 3, 4, 5]));