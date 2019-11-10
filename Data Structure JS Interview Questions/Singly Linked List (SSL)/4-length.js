/*
In this problem, you have to implement the length() function which will find the ​length of a given linked list.

Input
A linked list.

Output
The number of nodes in the list.

Sample Input
linkedlist = 0->1->2->3->4

Sample Output
5 
*/


function length(list){
    let length = 0;
    let currentNode = list.getHead().nextElement;
    while (currentNode !== null) {
      length = length + 1;
      currentNode = currentNode.nextElement;
    }
    return length;
  }