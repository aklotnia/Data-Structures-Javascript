// Node Class
class Node {
    constructor(data) {
      this.data = data;
      this.nextElement = null;
    }
}

//LinkedList Class
class LinkedList {
    constructor(){
      // head will be at the top of the list
      this.head = null; 
    }
}

// Fundamental operations for linked lists
// insertAtTail(data) - inserts an element at the end of the linked list
// Time complexity can be O(n) if not using tail attribute on linkedlist. With tail node attribute, complexity is O(1)
// insertAtHead(data) - inserts an element at the start/head of the linked list
// insertAtHead time complexity is O(1), because reassignement is all that occurs
// delete(data) - deletes an element with your specified value from the linked list
// deleteAtHead() - deletes the first element of the list
// Time complexity is O(1)
// search(data) - searches for an element in the linked list
// Time Complexity is O(n), both recursive and iterative algorithms can be used
// isEmpty() - returns true if the linked list is empty

class LinkedList {
    constructor(){
      // head will be at the top of the list
      this.head = null; 
      this.tail = null;
    }

    isEmpty = () => {
        return (!this.head)
    }

    printList = () => {
        if (this.isEmpty()) {
          console.log("Empty List");
          return false;
        } else {
          let temp = this.head;
          while (temp != null) {
            console.log(temp.data);
            console.log(" -> ");
            temp = temp.nextElement;
          }
          console.log("null");
          return true;
        }
      }

    insertAtHead = (data) => {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.nextElement = this.head
            this.head = newNode
        }
        return this
    }

    deleteAtHead = () => {
        if (this.isEmpty()) {
            return this
        } else {
            this.head = this.head.nextElement
            return this
        }
    }

    insertAtTail = (data) => {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.head = newNode
        } else {
            let temp = this.head
            while (temp.nextElement) {
                temp = temp.nextElement
            }
            temp.nextElement = newNode
        }
        return this
    }

    insertAtTailConstant = (data) => {
        let newNode = new Node(data)
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.nextElement = newNode
            this.tail = newNode
        }
        return this
    }

    deleteValue = (value) => {
        if (this.isEmpty()) {
            return false;
          }
        
          //else get pointer to head
          let currentNode = this.head;
          // if first node's is the node to be deleted, delete it and return true
          if (currentNode.data == value) {
            this.head = currentNode.nextElement;
            return true;
          }
        
          // else traverse the list
          while (currentNode.nextElement != null) {
            // if a node whose next node has the value as data, is found, delete it from the list and return true
            if (currentNode.nextElement.data == value) {
              currentNode.nextElement = currentNode.nextElement.nextElement;
              return true;
            }
            currentNode = currentNode.nextElement;
          }
          //else node was not found, return false
          return false;
    }

    search = (data) => {
        let temp = this.head
        while (temp) {
            if (temp.data === data) {
                return true
            }
            temp = temp.nextElement
        }
        return false
    }
}