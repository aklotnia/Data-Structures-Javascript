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

    length = () => {
        if (this.isEmpty()) {
            return 0
        } else {
            let temp = this.head
            let length = 0
            while (temp) {
                temp = temp.nextElement
                length++
            }
            return length
        }
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

    deleteAtTail = () => {
        if (this.isEmpty()) {
            return this
        } else if (!this.head.nextElement) {
            this.deleteAtHead()
            return this
        } else {
            let temp = this.head
            while (temp.nextElement.nextElement) {
                temp = temp.nextElement
            }
            temp.nextElement = null
            return this
        }
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

    reverse = () => {
        if (this.isEmpty()) {
            return this
        } else {
            let previousNode = null;
            let currentNode = this.head; // The current node
            let nextNode = null; // The next node in the list

            //Reversal
            while (currentNode != null) {
                nextNode = currentNode.nextElement;
                currentNode.nextElement = previousNode;
                previousNode = currentNode;
                currentNode = nextNode;
            }

            //Set the last element as the new head node
            this.head = previousNode;
        }
    }

    detectLoop = () => {    
        let onestep = this.head
        let twostep = this.head;
        while(onestep!=null && twostep!=null && twostep.nextElement!=null){ 
          onestep = onestep.nextElement // Moves one node at a time
          twostep = twostep.nextElement.nextElement // Moves two nodes at a time
          if (onestep == twostep){ // Loop exists
            return true;
          }
        }
        return false;
    }

    // linear time complexity, brute force method, two linear loops involved
    findMid = () => {
        let length = this.length()
        let middle = Math.ceil(length / 2);
        let midNode = this.head;
        for (let i = 1; i < middle; i++) {
            midNode = midNode.nextElement;
        }

        return midNode;
    }

    // still linear time complexity, but more efficient because both length and midnode calculation are happening in the same loop.
    findMidTwoPointer = () => {
        let midNode = null;
        if (this.isEmpty()) {
            return null;
        }
        let slowerNode = this.head;
        let fasterNode = this.head;
        if (slowerNode.nextElement == null) {
            return slowerNode;
        }
        while (slowerNode.nextElement != null && fasterNode.nextElement != null && fasterNode.nextElement.nextElement != null) {
            slowerNode = slowerNode.nextElement;
            fasterNode = fasterNode.nextElement.nextElement;
        }
        return slowerNode;
    }

    removeDuplicates = () => {
        if (this.isEmpty()) {
            return null;
          }
        
          //If list only has one node, leave it unchanged
          if (this.head.nextElement == null) {
            return list;
          }
        
          let outerNode = this.head;
          while (outerNode != null) {
            let innerNode = outerNode; // Iterator for the inner loop
            while (innerNode != null) {
              if (innerNode.nextElement != null && outerNode.data == innerNode.nextElement.data) { //Duplicate found ahead
                innerNode.nextElement = innerNode.nextElement.nextElement; // Remove duplicate
              } else {
                innerNode = innerNode.nextElement; // Otherwise simply iterate ahead
              }
            }
            outerNode = outerNode.nextElement;
          }
        
          return list;
    }
}