/*
Implement a function findBin(n) which will generate binary numbers from 11 to n in the form of a string 
using a queue. An illustration is also provided for your understanding.

Input
A positive integer nn

Output
Returns binary numbers in the form of strings from 1 up to n

Sample Input
n = 3

Sample Output
result = ["1","10","11"]
*/

class Queue {
    constructor() {
        this.items = [];

    }

    isEmpty() {
        return this.items.length == 0;
    }

    getFront() {
        if (this.items.length != 0) {
            return this.items[0];
        } else
            return null;
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);

    }

    dequeue() {
        if (this.items.length == 0) {
            return null;
        } else {
            return this.items.shift();
        }
    }
}

// Generate Binary Numbers from 1 to n using Queue
// Solution: Using a ​queue to generate new numbers from previous numbers
function findBin(n) {
    let result = [];
    let s1, s2;
    let myQueue = new Queue();
    myQueue.enqueue("1");

    for (let i = 0; i < n; i++) {
        result.push(myQueue.dequeue());

        s1 = result[i] + "0";
        s2 = result[i] + "1";

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);
    }
    return result;
}
    
console.log(findBin(10));

// Time Complexity:
// The time complexity of this solution is in O(n) as the array is iterated over once.