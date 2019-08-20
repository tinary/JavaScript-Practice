/*
Given a phrase, reverse the order of the characters of each word.
describe("Reverse Words", () => {
 it("Should reverse words", () => {
  assert.equal(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");
 });
});

*/

/**
 * @param {string} str
 * @return {string}
 */

const reverseWords = function(str) {
    let words = str.split('').reverse().join('');
    let reverse = words.split(' ').reverse().join(' ');
    return reverse;
}


let S = 'I love JavaScript!';
console.log(reverseWords(S));

let S2 = 'I Cheetos and cheetos loves me, Doritos';
console.log(reverseWords(S2));