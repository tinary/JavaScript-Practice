/*
Given a string of characters, return the character that appears the most often.
describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

*/

/**
 * @param {string} str
 * @return {string}
 */

 const max_1 = function(str) {
     let sArray = str.split('');
     let letterMap = new Map();
     for (let i = 0; i < sArray.length; i++) {
         if (letterMap.has(sArray[i])) {
             return sArray[i];
         }
         else {
             letterMap.set(sArray[i], 1);
         }
     }
 };

 // current run time is O(n^2)
 // to improve this method, we can use Binary search that will give us O(nlogn)

 let string1 = "Hello World!";
 console.log(max_1(string1));


 // using dictionary to create a table, whre chracters are key and compare are value
 const max_2 = function(str) {
     str = str.split('');
     let letters = {};
     let compare = 0;
     let mostFrequent;
     for (let i = 0; i < str.length; i++) {
         let char = str[i];
         if (letters[char] === undefined) {
             letters[char] = 1;
         }
         else {
             letters[char] += 1;
         }

         if (letters[char] > compare) {
             compare = letters[char];
             mostFrequent = str[i];
         }
     }
     return mostFrequent
 };


 let string2 = "Hehllho Wohrldh!";
 console.log(max_2(string2));