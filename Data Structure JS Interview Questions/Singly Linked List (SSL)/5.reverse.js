/*
You have to write the reverse function, which takes a singly linked list and produces the exact opposite list.

Input
A singly linked list.

Output
The reversed linked list.

Sample Input
LinkedList = 0->1->2->3-4

Sample Output
LinkedList = 4->3->2->1->0
​
*/

// Iterative Pointer Manipulation

function reverse(list) {
    let currentNode = list.getHead().nextElement; //Get current node
    let previousNode = null;  //Get previous node
    let nextNode = null;   //Get the next node in the list

    // Reversal
    while (currentNode != null) {
        nextNode = currentNode.nextElement;
        currentNode.nextElement = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    //Set the last element as the new head node
    list.getHead().nextElement = previousNode;

    return list;
}


let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(9);
list.insertAtHead(6);
list.insertAtHead(1);
list.insertAtHead(0);
list.printList();
reverse(list);
list.printList();

/*
Output:
0 -> 1 -> 6 -> 9 -> 4 -> null
4 -> 9 -> 6 -> 1 -> 0 -> null
*/

// Time Complexity:
// The algorithm runs in O(n) since the list is traversed once.