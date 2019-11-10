//delete by value
function deleteVal(list, value) {
    let deleted = false; //True or False
    //Check if list if empty, return false if it is
    if (list.isEmpty()) {
        console.log("Empty list");
        return deleted;
    }
    let head = list.getHead()
    currentNode = list.getHead().nextElement; //Get current node

    if (currentNode.data == value) {
        head.nextElement = currentNode.nextElement;
        currentNode.nextElement.previousElement = head;
        deleted = true;
        return deleted;
    }

    //Traversing/Searching for Node to Delete
    while (currentNode != null) {
        //Node to delete is found
        if (value == currentNode.data) {
            currentNode.previousElement.nextElement = currentNode.nextElement; //previous node now points to next node
            currentNode.nextElement.previousElement = currentNode.previousElement;
            deleted = true;
            break;
        }
        currentNode = currentNode.nextElement
    }
    if (deleted == false) {
        console.log(String(value), " is not in the list!");
    }
    else {
        console.log(String(value), " deleted!");
    }
    return deleted;
}

let list = new LinkedList();
for (i = 0; i < 10; i++) {
    list.insertAtHead(i);
}

list.printList();
deleteVal(list, 2);

list.printList();
deleteVal(list, 5);

list.printList();