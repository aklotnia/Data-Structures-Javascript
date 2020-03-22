//typical stack functionalities
//push(element) inserts an element at the top
//pop() removes and element from the top and returns it
//isEmpty() returns false if empty, true if element in stacck
//getTop() returns the element added most recently
//size() returns the number of elements in the array


// Stack Implementation
class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    isEmpty = () => {
        return this.items.length === 0
    }

    size = () => {
        return this.items.length
    }

    getTop = () => {
        if (this.items.length == 0)
            return null;
        return this.top;
    }

    push = (data) => {
        this.items.push(data)
        this.top = data
    }

    pop = () => {
        if (this.items.length != 0) {
            if (this.items.length == 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.items.length - 2];
                return this.items.pop();
            }
        } else {
            return null;
        }
    }
}


// Stack acting as a queue

"use strict";
const Stack = require('./Stack.js');
//Create Stack => stack = Stack(); 
//Push Function => stack.push() 
//Pop Function => stack.pop()       
//Top Function => stack.getTop()  
//Helper Functions => stack.isEmpty() //returns boolean
class newQueue {
    constructor() {
        this.stack = new Stack()
    }
    enqueue(value) {
        this.stack.push(value)
        this.stack.top = value
        return true
    }

    dequeue() {
        if (this.stack.isEmpty()) {
            return null
        } else {
            let newStack = new Stack()
            while (!this.stack.isEmpty()) {
                let poppeditem = this.stack.pop()
                newStack.push(poppeditem)
            }
            let desiredItem = newStack.pop()
            while (!newStack.isEmpty()) {
                let newpop = newStack.pop()
                this.stack.push(newpop)
            }
            return desiredItem
        }
    }
}