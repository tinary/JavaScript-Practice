/*
Given an array of numbers, calculate the mean, median, and mode.
const stat1 = new Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4]);describe("Mean", () => {
 it("Should implement mean", () => {
  assert.equal(Stats.round(stat1.mean()), 3.43);
  assert.equal(Stats.round(stat2.mean()), 2.5);
 });
});describe("Median", () => {
 it("Should implement median", () => {
  assert.equal(stat1.median(), 4);
  assert.equal(stat2.median(), 2.5);
 });
});describe("Mode", () => {
 it("Should implement mode", () => {
  assert.deepEqual(stat1.mode(), [4, 5]);
  assert.deepEqual(stat2.mode(), []);
 });
});

*/

/**
 * @param {array} A
 * @return {number}
 */

 const mean = function(A) {
     return A.reduce((value1, value2) => value1 + value2) / A.length
 };
 // O(n)

 const median = function(A) {
     let sortArray = A.sort();
     if (sortArray.length % 2 === 0) {
        let medianIndex1 = Math.floor(sortArray.length / 2);
        let medianIndex2 = medianIndex1 - 1;
        return (sortArray[medianIndex1] + sortArray[medianIndex2]) / 2;
     }
     else {
        let medianIndex = Math.floor(sortArray.length / 2);
        return sortArray[medianIndex];
     }
 };
 // linearithmic run time


 const mode = function(A) {
     let hash = {};
     let max = 0;
     let mostFrequent = [];
     for (let i = 0; i < A.length; i++) {
         let num = A[i];
         if (hash[num] === undefined){
            hash[num] = 1;
         }
         else {
             hash[num] += 1;
         }
         
         if (hash[num] > max) {
             max = hash[num];
             mostFrequent.push(A[i]);
         }
         else if (hash[num] === max) {
            mostFrequent.push(A[i]);
         }
     }
     return mostFrequent;
 };

 console.log(mode([1, 2, 3, 4, 4, 5, 5, 6]));
 console.log(mode([1, 1, 2, 2, 3, 3, 4, 4]));

 //let A1 = [4, 5];
 //console.log(mean(A1));
 console.log(median([1, 2, 3, 4, 4, 5, 5, 6]));
 console.log(median([1, 1, 2, 2, 3, 3, 4, 4]));
