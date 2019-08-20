/*
Given an array of words, print the count of all anagrams together in sorted order (increasing order of counts).
For example, if the given array is {“cat”, “dog”, “tac”, “god”, “act”}, 
then grouped anagrams are “(dog, god) (cat, tac, act)”. So the output will be 2 3.
*/

/**
 * @param {array[]}
 * @param {number[]}
 */

 /*
 const groupAnagram = function(A) {
     let anagram = [];
     //let result = [];
     let final = new Set ();
     for (let i = 0; i < A.length; i++) {
        let word =  A[i].split('').sort().join('');
        anagram.push(word);
     };
     for (let i = 0; i < anagram.length; i++) {
         for (let j = i + 1; j < anagram.length; j++) {
             if (anagram[i] === anagram[j]) {
                 //result.push([A[i], A[j]]);
                 final.add(A[i]);
                 final.add(A[j]);
             }
         }
     }
     //return result;
     return final;
 };*/



 const groupAnagram2 = function(A) {
    let sortedWords = [];
    let anagram = {};

    for (let i = 0; i < A.length; i++) {
       let word =  A[i].split('').sort().join('');
       sortedWords.push(word);
    };

    for (let i in A) {
        let sorted = sortedWords[i];
            // does the anagram object have a key on it called 'act'?
            // If not,
            // anagram[sorted]: creates a key on our anagram object called 'act'
            // [A[i]]: and stores an array with the current word 'cat'
        if (anagram[sorted] === undefined) {
            anagram[sorted] = [A[i]];
        } 
        else {
            // does the anagrams object have a key on it called ‘act’?
            // If yes, 
            // What happens is we access the key on the anagrams object with the ‘act’ key 
            // and we push() the current ‘tac’ into the array held by the ‘act’ key. 
            anagram[sorted].push(A[i]);
        }
    };

    for (let j in anagram) {
        return anagram[j].toString();
    } 

    //return anagram

};



 let A = ['cat', 'dog', 'tac', 'god', 'act'];
 //console.log(groupAnagram(A));

 console.log(groupAnagram2(A));