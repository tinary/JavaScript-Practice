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


/*
var groupAnagrams = function (strs) {
    let result = [];
    for (let i = 0; i < strs.length; i++) {
        result.push(strs[i].split('').sort().join(''));
    }
    
    let group1 = [];
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i] === result[j]) {
                group1.push(strs[i], strs[j]);
            }
        }
    }
};
*/

const groupAnagrams = function(strs) {
    const map ={};
    for (let str of strs) {
        const key = [...str].sort();

        if (!map[key]) {
            map[key];
        }
        map[key].push(str);
    }
    return Object.values(map);
}

const groupAnagrams2 = function(strs) {
    let obj = {};
    for (let i = 0; i < strs.length; i++) {
        let sort = strs[i].split('').sort().join();
        if (obj[sort]) {
            obj[sort].push(strs[i]);
        }
        else {
            obj[sort] = strs[i];
        }
    }
    return Object.values(obj);
}

let str = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(str));

