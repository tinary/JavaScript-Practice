/*
A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.

describe("Palindrome", () => {
 it("Should return true", () => {
  assert.equal(isPalindrome("Cigar? Toss it in a can. It is so tragic"), true);
 }); it("Should return false", () => {
  assert.equal(isPalindrome("sit ad est love"), false);
 });
});

*/

/**
 * @param {string} str
 * @return {boolean}
 */

const isParlindrome = function(str) {
    let S = str.toLowerCase();
    let P = S.replace(/[^A-Za-z]/g, '');
    let sArray = P.split('');
    for (let i = 0; i < sArray.length; i++) {
        if (sArray[i] === ' '){
            sArray.splice(i, 1);
            i--;
        }
    }
    let forward = sArray.join('');
    let backword = sArray.reverse().join('');
    if (forward === backword) {
        return true;
    }
    else {
        return false;
    }
};

let phrase1 = "Cigar? Toss it in a can. It is so tragic";
let phrase2 = "Should return false";
console.log(isParlindrome(phrase1));
console.log(isParlindrome(phrase2));