/*
Given a string of characters as input, write a function that returns it with the characters reversed.

describe("String Reversal", () => {
 it("Should reverse string", () => {
  assert.equal(reverse("Hello World!"), "!dlroW olleH");
 });
});

*/

/**
 * @param {string s} str
 * @return {string}
 */

const StringReversal = function(str) {
    return str.split('').reverse().join('');
}

console.log(StringReversal("Hello World!"));
