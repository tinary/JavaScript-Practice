/*
Implement a function findMinimum(arr) which finds the smallest number in the given array.

Input
An array of integers

Output
The smallest number in the array

Sample Input
arr = [9,2,3,6]

Sample Output
2

*/

function findMinimum(arr) {
    return Math.min(...arr);
 }
 console.log(findMinimum([9,2,3,6]));

 
 // Solution 1: Interate over the array

 function findMinimum1(arr) {
     let currentMin = arr[0];
     for (let n of arr) {
         if (n < currentMin) {
             currentMin = n;
         }
     }
     return currentMin;
 }
 console.log(findMinimum1([9,2,3,6]));
 // Time Complexity
 // Since the entire array is iterated over once, this algorithm is in linear time, O(n)

 