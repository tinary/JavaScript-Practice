/* 
Implement a function findSecondMaximum(arr) which returns the second largest element in the array. Assume that the array length will always be greater than 1 and it will not contain duplicates i.e. there will always be a maximum and a second maximum.

Input
An array

Output
Second largest element in the array

Sample Input
[9,2,3,6]

Sample Output
6

*/

function findSecondMaximum(arr) {
    let max = 0;
    let secondMax = 0;
    for (let num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        }
        else if (num > secondMax) {
            secondMax = num;
        }
    }
    return secondMax;
}
console.log(findSecondMaximum([9,2,3,6]));
// Time Complexity
// This solution is in O(n) since the array is traversed once only.