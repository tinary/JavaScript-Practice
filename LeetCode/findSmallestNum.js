// find the smallest number in the array, the array is out of order
// statistic order

let arr = [3,5,7,2,9];

function findSmallestNumber(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log(findSmallestNumber(arr));

// runtime: O(n)


function find2ndSmallestNumber(arr) {
    let min = arr[0];
    let min2 = arr[1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min2 = min;
            min = arr[i];
        }
        else if (arr[i] < min2) {
            min = arr[i];
        }
    }
    return min2;
}
console.log(find2ndSmallestNumber(arr));
// runtime: O(n)

