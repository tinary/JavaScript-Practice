// Explanation: data and nextElement remain unchanged. 
// The previousElement pointer has been introduced to store information about the preceding node.

class Node {
    constructor(value) {
        this.data = value; //Stores data
        this.previousElement = null; //Stores pointer to previous element
        this.nextElement = null; //Stores pointer to next element
    }
}

class LinkedList{
    constructor(){
      this.headNode=new Node(-1);
      this.tailNode=new Node(-1);
    }
   }