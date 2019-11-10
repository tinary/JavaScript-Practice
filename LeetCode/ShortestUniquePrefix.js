/*
Find shortest unique prefix to represent each word in the list.

Input: [zebra, dog, duck, dove]

Output: {z, dog, du, dov}

Explain: 
The shortest unique prefix for the string “dove” can be found as:
Compare “dove” to “dog” –> unique prefix for dove is “dov”
Compare “dove” to “duck” –> unique prefix for dove is “do”
Now, the shortest unique prefix for “dove” is the one with greater length between “dov” and “do”. So, it is “dov”.

*/

function FindShortestUniquePrefix(array) {
    let sortArray = array.sort();
}