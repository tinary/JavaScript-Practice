/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations 
that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letters = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]        
    };
    
    let results = [];
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];
        let avail_letters = letters[digit];
        console.log(avail_letters)
        results.push(avail_letters)
    }
    
    let ans = [];
    for (let j = 0; j < results.length; j++) {
        for (let k = j + 1; k < results.length; k++) {
            ans.push(results[i][i] + results[j][j]);
        
    }
    return ans;
};