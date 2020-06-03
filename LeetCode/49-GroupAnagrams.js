let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

/*
Input:
["eat", "tea", "tan", "ate", "nat", "bat"]

Output:
[
    ["ate", "eat", "tea"],
    ["nat", "tan"],
    ["bat"]
]
*/

var groupAnagrams = function (strs) {
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

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(str));

