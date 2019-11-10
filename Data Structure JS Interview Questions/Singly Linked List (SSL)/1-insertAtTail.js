/*
Just as heads and tails are polar opposites, this function is the opposite of 
what we saw in the last lesson. However, it is just as simple.

We need to insert a new object at the end of the linked list. 
You can naturally guess, that this newly added Node will point to null as it is at the tail.

Input
A linked list and an integer value.

Output
The updated linked list with the value inserted.

Sample Input
Linked List = 0->1->2
integer = 3

Sample Output
Linked List = 0->1->2->3
​
*/


//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty() 
//Node class  { data ; Node nextElement;}

//Inserts a value at the end of the list  
function insertAtTail(list, value) {

    //Creating a new Node with value data
    let node = new Node(value);

    //Start from headNode
    currentNode = list.getHead();

    //Iterate to the last element
    while (currentNode.nextElement != null) {
        currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    list.length = list.length + 1;
    return list;
}

// Time Complexity
// This algorithm traverses the entire linked list and hence, works in O(n) time.


let list = new LinkedList()
insertAtTail(list, 0);
list.printList();

insertAtTail(list, 1);
list.printList();

insertAtTail(list, 2);
list.printList();

insertAtTail(list, 3);
list.printList();
/*

// Output:

0 -> null
0 -> 1 -> null
0 -> 1 -> 2 -> null
0 -> 1 -> 2 -> 3 -> null

*/

