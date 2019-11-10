/*
Implement a function which merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

Input:
Two sorted arrays.

Output:
A merged sorted array consisting of all elements of both input arrays.

Sample Input
arr1 = [1,3,4,5]  
arr2 = [2,6,7,8]
Sample Output
arr = [1,2,3,4,5,6,7,8]

input: mergeArrays([-133,-100,0,4],[-2000,2000])
output: [-2000,-133,-100,0,4,2000]

*/

// My solution:
function mergeArrays(arr1, arr2) {
    let merge = arr1.concat(arr2);
    return merge.sort((a, b) => a - b);
}
console.log(mergeArrays([1,3,4,5] , [2,6,7,8]));
console.log(mergeArrays([-133,-100,0,4],[-2000,2000]));

// Time Complexity:
// since we're using the sort() function, it will be O(n log n)


//
// A nother solution for more elegant way
//
//Traverse both arrays and insert smaller value from arr1 or arr2
//into merge array and then increment that array index.
function mergeArrays2(arr1, arr2) {
    let merge = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merge.push(arr1[i]);
            i++;
        }
        else {
            merge.push(arr2[j]);
            j++;
        }
    }

    //If an array is completely traversed, while other one is left then just
    //copy all the remaining elements into result array

    if (i <= (arr1.length - 1)) {
        arr1.splice(0, i);
        merge = merge.concat(arr1);
    }
    else if (j <= (arr2.length - 1)) {
        arr2.splice(0, j);
        merge = merge.concat(arr2);
    }
    return merge;
}

console.log(mergeArrays2([1,3,4,5] , [2,6,7,8]));
console.log(mergeArrays2([-133,-100,0,4],[-2000,2000]));

// Time complexity: O(n + m)
// where n and m are the lengths of the lists. This is because both lists are iterated over once.