/*
Implement a function, findFirstUnique(arr) that returns the first unique integer in the array.

Input
An array of integers

Output
The first unique element in the array

Sample Input
[9,2,3,2,6,6]

Sample Output
9
*/

// My solution: Using dictionary to keep count of repetitions

function findFirstUnique(arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        //let num = arr[i];
        if (count[arr[i]] === undefined) {
            count[arr[i]] = 1;
        }
        else {
            //count[arr[i]] = count[arr[i]] + 1;
            count[arr[i]]++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]] === 1) {
            return arr[i];
        }
    }
    
 }

 console.log(findFirstUnique([9,2,3,2,6,6]));
 console.log(findFirstUnique([ 9, 2, 3, 2, 6, 6 ,9,0,3]))
 console.log(findFirstUnique([2,2,1]))
// Time Complexity:
// Since the list is iterated over twice, the time complexity is linear i.e. O(n)

