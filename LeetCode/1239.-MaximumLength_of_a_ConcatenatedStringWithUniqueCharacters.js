/*
1239. Maximum Length of a Concatenated String with Unique Characters
Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

Example 1:

Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.
Example 2:

Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".
Example 3:

Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
*/


/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let concatArray = [...arr];
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          concatArray.push(arr[i].concat(arr[j]));
      }
  }
  //console.log(concatArray);
  
  const result = [];
  
  for (let i = 0; i < concatArray.length; i++) {
      let str = concatArray[i];
      
      // console.log(str);
      // console.log(isUnique(str));
      
      if (isUnique(str) === true) {
          result.push(concatArray[i]);
      }
  }
  console.log(result);
  
  let maxString = result.map(x => x.length);
  console.log(maxString);
  
  return Math.max.apply(null, maxString);
  
  
};



// check if string is unique
function isUnique(str) {
 let unique = {};
 for (let k = 0; k < str.length; k++) {
   if (unique[str[k]] === undefined) {

     unique[str[k]] = 1;
   } else {
     unique[str[k]]++;
   }
   //console.log(`key: ${str[k]}, count: ${unique[str[k]]}`);
 }

 for (let key in unique) {
   if (unique[key] === 1) {
     return true;
   } else {
     return false;
   }
 }
}