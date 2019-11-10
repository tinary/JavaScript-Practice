/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
    let count = {};
    let char = s.split('');
    for (let i = 0; i < char.length; i++) {
        if (count[char[i]] === undefined) {
            count[char[i]] = 1;
        }
        else {
            count[char[i]]++;
        }
    }
    for (let i = 0; i < char.length; i++) {
        if (count[char[i]] === 1) {
            return i;
        }
    }
    return -1;
};


console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loeeleelccodde"));
console.log(firstUniqChar("loveleelccodde"));