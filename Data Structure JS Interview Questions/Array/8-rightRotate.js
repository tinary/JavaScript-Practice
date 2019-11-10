/*
Implement a function rightRotate(arr,n) which will rotate the given array by n. 
This means that the right-most elements will appear at the left-most position in the array 
and so on. You only have to rotate by one element from the right though.

Input
An array and a number by which to rotate that array

Output
The given array rotated by n elements

Sample Input
arr = [1,2,3,4,5]
n = 3

Sample Output
arr = [3,4,5,1,2]

*/

// My Solution: Using splice(), concat()

function rightRotate(arr,n){
    return arr.splice(arr.length - n).concat(arr.splice(0, arr.length));
    //return arr.splice(arr.length - n).concat(arr);
  }

  console.log(rightRotate([1,2,3,4,5], 3));
//Time Complexity
// The time complexity of this solution is O(1)
// since the array is not iterated over and is simply indexed and returned.
