class Node {
    constructor(value) {
        this.data = value
        this.nextElement = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value) {
        let node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = node
            return true
        }

        this.tail.nextElement = node
        this.tail = node
        return true
    }

    removeFromTail() {
        if (!this.head) {
            return "Data Structure is empty"
        }

        if (this.head && !this.head.nextElement) {
            let poppedElement = this.head
            this.head = null

            return poppedElement
        }

        let temp = this.head

        while (temp.nextElement.nextElement) {
            temp = temp.nextElement
        }

        let poppedElement = temp.nextElement
        temp.nextElement = null
        this.tail = temp

        return poppedElement
    }

    readTail() {
        return this.tail.data
    }
}


class Stack {
    constructor() {
        this.ll = new LinkedList
        this.top = null
        this.bottom = null
        this.length = 0
    }

    push(value) {
        this.ll.append(value)

        if (this.length === 0) {
            this.top = value
            this.bottom = value
        } else {
            this.top = value
        }

        this.length++

        return true
    }


    pop() {

        if (this.length === 0) {
            return "This is empty"
        }

        let poppedElement = this.ll.removeFromTail()
        this.top = this.ll.readTail()

        this.length--

        if (this.length === 0) {
            this.top = null
            this.bottom = null
        }


        return poppedElement
    }


    peek() {
        return this.ll.readTail()
    }

}


class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        let node = new Node(value)

        if (this.length === 0) {
            this.first = node
            this.last = node
            this.length++
            return this
        }
        
        this.last.nextElement = node
        this.last = node

        this.length++

        return this
    }

    dequeue() {
        if (this.length === 0) {
            return null
        }

        let element = this.first
        this.first = element.nextElement

        if (this.length === 1) {
            this.last = null
        }

        this.length--

        return element
    }
}