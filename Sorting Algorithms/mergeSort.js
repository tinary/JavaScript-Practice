//Implementaion in JS
const list = [23, 4, 42, 15, 16, 8, 3]


function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }

    const middle = list.length / 2;
    const left = list.slice(0, middle);
    const right = list.slice(middle, list.length);

    return merge(mergeSort(left), mergeSort(right));

}


function merge(left, right) {
    let result = [];

    while (left.length || right.length) {
        if (left.length && right.length) {
            if (left[0] < right[0]) {
                result.push(left.shift());
            }
            else {
                result.push(right.shift());
            }
        }
        else if (left.length) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    return result;
}


console.log(mergeSort(list)) // [ 3, 4, 8, 15, 16, 23, 42 ]

// Time Complexity: O(n long n)
// Space Complexity: O(n)
