/*
In this problem, you have to implement the findSum(arr,value) function which will take a number n as input and
return two numbers that add up to n.

Input
An array and a number n

Output
An array with two integers a and b ([a,b]) that add up to n where:

index of a in the input array < the index of b in the input array

Sample Input
arr = [1,21,3,14,5,60,7,6]
n = 81

Sample Output
arr = [21,60]

For example, in this illustration, we are given 81 as the number n and 
when we traverse the whole array we find that 21 and 60 are the integers that add up to 81. 
If our solution fails to find any two numbers, it should return false;
*/

// My Solution:
function findSum(arr,value){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === value) {
              result.push(arr[i], arr[j]);
          }
      }
  }

  if (result.length === 0) {
      return false;
  }
  else {
      return result.sort((a, b) => a - b);
  }
}

console.log(findSum([1,21,3,14,5,60,7,6], 81));
console.log(findSum([1, 2, 3, 4], 5))
console.log(findSum([1, 2, 3, 4], 10))

// Time Complexity: 
// Since we iterate over the entire array (length n) n times, the time complexity is O(n^2)
// Therefore, it is not very time efficient.


// Solution 1: Moving indcies
function findSum1(arr, value) {
    arr.sort((a ,b) => a - b);
    let index1 = 0;
    let index2 = arr.length - 1;
    let result = [];
    sum =0;

    while (index1 != index2) {
        sum = arr[index1] + arr[index2];
        if (sum < value) {
            index1++;
        }
        else if (sum > value) {
            index2--;
        }
        else {
            result.push(arr[index1]);
            result.push(arr[index2]);
            return result;
        }
    }
    return false;
}
console.log(findSum1([1,21,3,14,5,60,7,6], 81));
console.log(findSum1([1, 2, 3, 4], 5))
console.log(findSum1([1, 2, 3, 4], 10))
// Time Complexity:
// Since most popular sorting functions take O(n log n), 
// let’s assume that the JavaScript .sort() function takes the same. 
// Then, in the worst case scenario the entire array iterated from opposite ends 
// which takes O(n). So this solution is in O(n log(n))



// Solution 2: Using set -- better run time
function findSum2(arr, value) {
    let findValues = new set();
    let result = [];
    for (let n in arr) {
        if (findValues.has(value - arr[i])) {
            result.push(value - arr[i]);
            result.push(arr[i]);
            return result;
        }

        findValues.add(arr[i]);
    }
    return false;
}
console.log(findSum2([1,21,3,14,5,60,7,6], 81));
console.log(findSum2([1, 2, 3, 4], 5))
console.log(findSum2([1, 2, 3, 4], 10))

// Time Complexity
// As the array is always iterated once, the time complexity for this algorithm will be O(n). 
// This also implies that this is the best solution.