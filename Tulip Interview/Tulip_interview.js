/*
Find the longest word in the string. Provide a dictionary to find the valid word.
*/

const dictionary = [
    'hello',
    'world',
    'lipstick',
    'lip'
  ];

const S = 'clipstickjk';

const findLongestWord = function (S) {
    let words = [];
    for (let i = 0; i < S.length; i++) {
        for (let j = i + 1; j < S.length; j++) {
            words.push(S.slice(i, j));
        }
    }
    let match = [];
    for (let i in words) {
        if (dictionary.includes(words[i])){
            match.push(words[i]);
        }   
    }
    return match.reduce((a, b) => a.length > b.length ? a : b, '');
}

console.log(findLongestWord(S));