/*
Implement a function called maxMin(arr) which will re-arrange the elements of a sorted array 
so that the first position will have the largest number, the second will have the smallest, 
and the third will have second largest and so on. In other words, 
all the odd-numbered indices will have the largest numbers in the array in descending order and 
the even numbered indices will have the smallest numbers in ascending order.

Input
A sorted array

Output
An array with elements stored in max/min form

Sample Input
arr = [1,2,3,4,5]

Sample Output
arr = [5,1,4,2,3]

*/

function maxMin(arr){ 
    let result = [];
    while (arr.length > 1) {
        let large = arr.pop();      //O(n)
        let small = arr.shift();    //O(n)
        result.push(large, small);  //O(1)
    }
    return result.concat(arr);
  }

  console.log(maxMin([1,2,3,4,5]));
  // Time Complexity: O(n) ?? - not sure



  function maxMin2(arr) {
      let result = [];
      for (let i = 0; i < Math.floor(arr.length/2); i++) {
          result.push(arr[arr.length - (i + 1)]);   //get items backwards from the array
          result.push(arr[i]);                      //get items forward from the array
      }
      if (arr.length % 2) {
          result.push(arr[Math.floor(arr.length/2)]);   //get the item in the middle of the array
      }
      return result;
  }

  console.log(maxMin2([1,2,3,4,5]));
  // Time Complexity: O(n), as the array is iterated over once.