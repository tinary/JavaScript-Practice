/*
Anagrams are words or phrases that contain the same number of characters. 
Create a function that checks for this.
describe("Anagrams", () => {
 it("Should implement anagrams", () => {
  assert.equal(anagrams("hello world", "world hello"), true);
  assert.equal(anagrams("hellow world", "hello there"), false);
  assert.equal(anagrams("hellow world", "hello there!"), false);
 });
});

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const anagrams = function(s, t) {
    s = s.replace(/\W/g, "").toLowerCase().split('');
    t = t.replace(/\W/g, "").toLowerCase().split('');
    if (s.length === t.length) {
        return s.sort().join('') === t.sort().join('');   
        //can't compare two arrays, so need to use join() to put the array back to string
    }
};

let s1 = "Car123";
let s2 = "arc123"

console.log(anagrams(s1, s2));