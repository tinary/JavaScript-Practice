/*
Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left 
and all positive elements appear at the right.

While zero is NOT positive or negative, we consider zero to be a positive​ integer for this challenge!

Input
An array containing positive and negative elements

Output
A sorted array with negative elements at the left and positive elements at the right

Sample Input
[10,-1,20,4,5,-9,-6]

Sample Output
[-1,-9,-6,10,20,4,5]
*/


function reArrange(arr) {
    let negative = [];
    let positive = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negative.push(arr[i]);
      }
      else if (arr[i] > -1) {
        positive.push(arr[i]);
      }
    }
    return negative.concat(positive);
  }

  console.log(reArrange([10,-1,20,4,5,-9,-6]));

  //Time Complexity
  // Since the given list is only iterated over once, the time complexity of this solution is O(n)



  //
  // Solution: Reaarranging in Place
  //
  function reArrange1(arr) {
      let leftMostPos = 0;
      let temp;

      for (let i = 0; i < arr.length; i++) {
          if (arr[i] < 0) {
              if (i != leftMostPos) {
                  temp = arr[i];
                  arr[i] = arr[leftMostPos];
                  arr[leftMostPos] = temp;
              }
              leftMostPos++;
          }
      }
      return arr;
  }
  console.log(reArrange([10, -1, 20, 4, 5, -9, -6]))

// In this solution, we iterate over the entire array and 
// if we encounter a negative element, we simply swap it with the leftmost positive element.

// Time Complexity
// The time complexity of this algorithm is O(n)
// with no extra space used as the entire array is iterated over.