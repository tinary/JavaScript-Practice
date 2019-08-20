/*
Given a phrase, capitalize every word.
describe("Capitalization", () => {
 it("Should capitalize phrase", () => {
  assert.equal(capitalize("hello world"), "Hello World");
 });
});

 */

/**
 * @param {string} str
 * @return {string}
 */

 const capitalize = function(str) {
     let result = [];
     let words = str.split(' ');
     for (let i = 0; i < words.length; i++) {
        result.push(words[i].slice(0,1).toUpperCase().concat(words[i].slice(1)));
     }
     return result.join(' ');
 }

 console.log(capitalize('hello world'));
 console.log(capitalize('hello, my name is tina'));