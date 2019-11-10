/*
In this lesson, you’ll be implementing the delete by value strategy. 
We’ll describe its functionality, which should give you a clearer idea of what you have to do.

If you fully understood the last lesson, this should be a piece of cake.

In this function, we can pass a particular value which we want to be deleted​ from the list. 
The node containing this value could be anywhere in the list. 
It is also possible that such a node may not exist at all.

Therefore, we would have to traverse the whole list until we find the value which needs to be deleted. 
If the value doesn’t exist, we do not need to do anything.

Input
A linked list and an integer to be deleted.

Output
true if the value is deleted. Otherwise, false.

Sample Input
LinkedList = 3->2->1->0
integer = 2

Sample Output
true
*/

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Delete at head => list.deleteAtHead()
//Search for element => list.search(value)
//Node class  { data ; Node nextElement;}

function deleteVal(list, value) {
    let deleted = false; //True or False
    //Check if list if empty, return false if it is
    if (list.isEmpty()) {
        console.log("Empty list");
        return deleted;
    }
    currentNode = list.getHead().nextElement; //Get current node
    previousNode = null;  //Get previous node
    if (currentNode.data == value) {
        list.deleteAtHead(); //Use the previous function
        deleted = true;
        return deleted;
    }

    //Traversing/Searching for Node to Delete
    while (currentNode != null) {
        //Node to delete is found
        if (value == currentNode.data) {
            previousNode.nextElement = currentNode.nextElement; //previous node now points to next node
            currentNode.nextElement = null;
            deleted = true;
            break;
        }
        previousNode = currentNode
        currentNode = currentNode.nextElement
    }
    if (deleted == false) {
        console.log(String(value), " is not in list!");
    }
    else {
        console.log(String(value), " deleted!");
    }
    return deleted;
}

let list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(4);
list.insertAtHead(5);
list.insertAtHead(7);
list.insertAtHead(1);
list.printList();
deleteVal(list, 5);
list.printList();

// Time Complexity
// In the worst-case scenario, 
// you would have to traverse until the end of the list. This means the time complexity will be O(n).