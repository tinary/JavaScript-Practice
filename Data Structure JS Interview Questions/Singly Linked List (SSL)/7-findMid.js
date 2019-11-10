/*
You have to implement the findMid() function which will take a linked list 
as an input and return the value of the middle node. If the length of the list is even, 
the middle value will occur at length /2. 
For a list of odd length, the middle value will be (length/2) - 1.

Input
A singly linked list.

Output
The integer value of the middle node.

Sample Input
LinkedList = 7->14->10->21

Sample Output
14
*/

function findMid(list) {
    if (list.isEmpty()) {
        return null;
    }

    let mid = 0;
    let node = list.getHead();
    if (list.length % 2 === 0) {
        mid = list.length / 2;
    }
    else {
        mid = (list.length / 2) + 1; 
    }

    for (let i = 1; i <= mid; i++) {
        node = node.nextElement;
    }
    return node.data;
}
// iterate till the middle index and return the value of that node.
// Time Complexity
// The algorithm makes a linear traversal over the list. Hence, the time complexity is O(n).

