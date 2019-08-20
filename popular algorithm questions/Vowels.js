/*
Given a string of words or phrases, count the number of vowels.
describe("Vowels", () => {
 it("Should count vowels", () => {
  assert.equal(vowels("hello world"), 3);
 });
});

*/

/**
 * @param {string} str
 * @return {number}
 */

const vowels = function(str) {
    let word = str.toLowerCase().split('');
    let vowel = ['a','e','i','o','u'];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowel.includes(word[i])) {
            count++;
        }
    }
    return count;
};


let words = "hello world";
console.log(vowels(words));