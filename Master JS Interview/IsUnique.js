/*
Create a function that determines whether all characters in a string are unique or not. 
Make it case-sensitive, meaning a string with both 'a' and 'A' could pass the test.

Input: String
Output: Boolean

isUnique('abcdef'); // -> true
isUnique('89%df#$^a&x'); // -> true
isUnique('abcAdef'); // -> true
isUnique('abcaef'); // -> false
*/

/**
 * @param {array} str
 * @return {boolean}
 */


const isUnique = function (str) {
    let S = str.split('').sort();
    for (let i = 0; i < S.length; i++) {
        for (let j = i + 1; j < S.length; j++) {
            if (S[i] === S[j]) {
                return false;
            }
            else {
                return true;
            }
        }
    }
}


const isUnique2 = function (str) {
    for (let i = 0; i < str.length; i++) {
        if(str.lastIndexOf(str[i]) !== i) {
            return false;
        }
    }
    return true;
}
//time complexity is O(n^2): lastIndexOf nested inside for loop
//space complexity: O(1) cuz only use one variable "i"



function isUnique3 (str) {
    const chars = str.split('').sort();        // sorting algo takes O(log n)
    for (let i = 0; i < chars.length; i++) {   // for loop is O(n)
        if (chars[i] === chars[i + 1]) {
            return false;
        }
    }
    return true;
}
// time: O(n)
// space: 


/*
console.log(isUnique('abca'));
console.log(isUnique('abcdef'));
console.log(isUnique('89%df#$^a&x'));
console.log(isUnique('abcAdef')); 
console.log(isUnique('abcaef')); 
*/


console.log(isUnique3('abcdef')); // -> true
console.log(isUnique3('89%df#$^a&x')); // -> true
console.log(isUnique3('abcAdef')); // -> true
console.log(isUnique3('abcaef')); // -> false