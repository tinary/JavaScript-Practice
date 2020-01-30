/*
All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, 
for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  let i = 0;
  let j = 10;
  let count ={};
  
  while (j <= s.length) {
      let str = s.substring(i, j);
      if (count[str] === undefined) {
          count[str] = 1;
      }
      else {
          count[str]++;
      }
      i++;
      j++;
  }
  
  let result = [];
  for (let k in count) {
      if (count[k] > 1) {
          result.push(k);
      }
  }
  return result;
};