function deleteAtHead(list) {
    //Get the head and first element of the list
    let head = list.getHead();
    let firstElement = head.nextElement;

    //If list is not empty, link head to the nextElement of firstElement
    if (firstElement != null) {
        head.nextElement = firstElement.nextElement;
        firstElement.nextElement = null;
    }
    return list;
}

let list = new LinkedList();
for (i = 0; i < 10; i++) {
    list.insertAtHead(i);
}

list.printList();
deleteAtHead(list);
deleteAtHead(list);
list.printList();