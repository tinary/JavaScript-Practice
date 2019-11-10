function binarySearch(arr, item) {
    var first = 0, mid;
    var last = arr.length - 1;
    var found = false
    while ((first <= last) && !found) {
        mid = Math.floor((first + last) / 2)
        if (arr[mid] == item)
            found = mid
        else {
            if (item < arr[mid])
                last = mid - 1
            else
                first = mid + 1
        }
    }
    return found
}

function findSum(arr, value) {
    arr.sort(function (a, b) {
        return a - b
    })
    var index;
    for (let j of arr) {
        index = binarySearch(arr, value - j)
        if (index)
            return [j, value - j]
    }
    return false;
}

console.log(findSum([1,21,3,14,5,60,7,6], 81));
console.log(findSum([1, 2, 3, 4], 6))
console.log(findSum([1, 2, 3, 4], 10))