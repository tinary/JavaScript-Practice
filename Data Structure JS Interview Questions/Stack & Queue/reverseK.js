/*
Implement the function reverseK(queue, k) which takes a queue and a number “k” as input 
and reverses the first “k” elements of the queue.

An illustration is also provided for your understanding.

Output
Queue with first “k” elements reversed

Sample Input
Queue = [1,2,3,4,5,6,7,9,10]    k = 5

Sample Output
result = [5,4,3,2,1,6,7,8,9,10]
*/

class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    getTop() {
        if (this.items.length == 0)
            return null;
        return this.top;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if (this.items.length != 0) {
            if (this.items.length == 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }

        } else
            return null;
    }
}

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


// Solution: Reversing First k Elements of Queue
function reverseK(queue, k) {
    if (queue.isEmpty() === false) {
        let myStack = new Stack();
        let count = 0;
        while (count < k) {
            myStack.push(queue.dequeue());
            count++;
        }

        let size = 0;
        while (myStack.isEmpty() === false) {
            queue.enqueue(myStack.pop());
            size = queue.size();
        }

        for (let i = 0; i < (size - k); i++) {
            queue.enqueue(queue.dequeue());
        }
    }
    return queue;
}


var queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(10)


console.log(reverseK(queue, 5));
//let queueSize = queue.size();
//for (var i = 0; i < queueSize; i++) {
//    console.log(queue.dequeue());
//}


// Time Complexity
// The time complexity of this function is O(k) as that many elements of the given queue are iterated over!