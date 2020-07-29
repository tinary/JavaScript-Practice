/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // make all characters to lowercase and replace non alphabat to ''
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  
  let start = 0;
  let end = s.length - 1;

  while (!(start > end)) {
      if (s[start] != s[end]) {
          return false;
      }
      start++;
      end--;
  }
  
  return true;
};


