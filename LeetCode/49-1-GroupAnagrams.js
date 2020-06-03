/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let findAnagram = [];
  let result = {};
  for (let i = 0; i < strs.length; i++) {
    findAnagram.push(strs[i].split("").sort().join(""));
  }
  for (let i = 0; i < findAnagram.length; i++) {
    if (result[findAnagram[i]] === undefined) {
      result[findAnagram[i]] = [strs[i]];
    }
    else {
      result[findAnagram[i]].push(strs[i]);
    }
  }
  return Object.values(result);
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));



var groupAnagrams2 = function (strs) {
  let result = {};
  for (let i = 0; i < strs.length; i++) {
    let sortAnagram = strs[i].split("").sort().join("");
    if (result[sortAnagram] === undefined) {
      result[sortAnagram] = [strs[i]];
    }
    else {
      result[sortAnagram].push(strs[i]);
    }
  }
  return Object.values(result);
};

let strs2 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams2(strs2));