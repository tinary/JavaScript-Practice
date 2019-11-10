/*
It’s time to figure out how to implement another popular linked list function: search

To search for a specific value in a linked list, 
there is no other approach but to traverse the whole list until we find the desired value.

In that sense, the search operation in linked lists is similar to the linear search in normal lists or arrays 
- all of them take O(n) amount of time.

The search algorithm in a linked list can be generalized to the following steps:

(1) Start from the head node.
(2) Traverse the list till you either find a node with the ​given value, 
    or you reach the end node which will indicate that the given node doesn’t exist in the list.

Input
A linked list and an integer to be searched.

Output
true if the integer is found. false otherwise.

Sample Input
Linkedlist = 5->90->10->4  
integer = 4

Sample Output
true

*/

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()  
//Node class  { data ; Node nextElement;}

//Searches a value in the given list.


//
// Interative approache Solution
//
function search(list, value) {

    // start from headnode
    currentNode = list.getHead();

    // Traverse the list until you find the value 
    // if value not found continue to the next element until it reach to the end of the list
    while (currentNode.nextElement !== null) {
        if (currentNode.data === value) {
            return true;
        }
        else {
            currentNode = currentNode.nextElement;  //iterative step
        }
    }
    return false
}

let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(10);
list.insertAtHead(40);
list.insertAtHead(5);
list.printList();
console.log(search(list, 4));
/*
Output:
5 -> 40 -> 10 -> 4 -> null
true
*/
// Time Complexity: O(n)
// Space Complexity: O(1)



//
// Recursive approache Solution
//
function search(node, value) {
    //Base case
    if (node == null) {
        return false;
    }

    //Check if the node's value contains the required value
    if (node.data == value) {
        return true; //value found
    }

    //Recursive call to the next node in the list
    return search(node.nextElement, value);  //recursive step
}

let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(10);
list.insertAtHead(40);
list.insertAtHead(5);
list.printList();
console.log(search(list.getHead(), 4));
/*
Output:
5 -> 40 -> 10 -> 4 -> null
true
*/
// Time Complexity: O(n)
// Space Complexity: O(n)