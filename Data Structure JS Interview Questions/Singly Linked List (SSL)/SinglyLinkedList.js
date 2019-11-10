class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node(-1);
        this.length = 0;
    }

    //Insertion At Head  
    insertAtHead(dt) {
        let tempNode = new Node(dt);
        tempNode.nextElement = this.head.nextElement;
        this.head.nextElement = tempNode;
        this.length = this.length + 1;
        return this; //returning the updated list
    }

    isEmpty() {
        return (this.length == 0);
    }

    //function to print the linked list
    printList() {
        if (this.isEmpty()) {
            console.log("Empty List");
            return false;
        }
        else {
            let temp = this.head.nextElement
            while (temp.nextElement != null) {
                process.stdout.write(String(temp.data));
                process.stdout.write(" -> ");
                temp = temp.nextElement;
            }
            console.log("null");
            return true;
        }
    }

}

let list = new LinkedList();
for (i = 0; i < 10; i++) {
    list = list.insertAtHead(i);
}
list.printList(); //will print the list