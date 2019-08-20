/*
Given an integer, reverse the order of the digits.
describe("Integer Reversal", () => {
 it("Should reverse integer", () => {
  assert.equal(reverse(1234), 4321);
  assert.equal(reverse(-1200), -21);
 });
});

*/

/**
 * @param {number} num
 * @return {number}
 */

const reverse = function(num) {
    let reversed = 0;
    let number = Math.abs(num);

    while (number > 0) {
        let lastDigit = number % 10;
        reversed = (reversed * 10) + lastDigit;
        number = Math.floor(number / 10);        
    }

    if (num < 0) {
        return 0 - reversed;
    }
    else {
        return reversed;
    } 
};


let num1 = 1234;
let num2 = -1200;
console.log(reverse(num1));
console.log(reverse(num2));