/*
mplement a function which removes all the even elements from a given array. Name it removeEven(arr).

Input
An array with random integers.

Output
An array with only odd integers

Sample Input
[1,2,4,5,10,6,3]
Sample Output
[1,5,3]
*/

// my solution
function removeEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr.splice(i, i);
            i--;
        }
    }
    return arr;
}
console.log(removeEven([1,2,4,5,10,6,3]));



// solution 1
function removeEven1(arr) {
    let odd = [];
    for (let n of arr) {
        if ((n % 2) != 0) {
            odd.push(n);
        }
    }
    return odd;
}
console.log(removeEven1([1,2,4,5,10,6,3]));
// Time complexity: 
// Since the entire list has to be iterated over, this solution is in O(n)



// solution 2
function removeEven2(arr) {
    return arr.filter(n => (n % 2) != 0);
}
console.log(removeEven2([1,2,4,5,10,6,3]));
// Time complexity: 
// Since the entire list has to be iterated over, this solution is in O(n)