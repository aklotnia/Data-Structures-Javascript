class Node {
    constructor(value) {
        this.data = value
        this.nextElement = null
    }
}

class LinkedList {
    constructor(node) {
        this.head = node
        this.tail = node
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value)
        this.tail.nextElement = newNode
        this.tail = newNode
        this.length++
        return true
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.nextElement = this.head
        this.head = newNode
        this.length++
        return true
    }

    insert(index, value) {
        let newNode = new Node(value)
        let currentIndex = 0
        let temp = this.head

        while (index !== currentIndex + 1) {
            temp = temp.nextElement
            currentIndex++
        }

        newNode.nextElement = temp.nextElement
        temp.nextElement = newNode
        this.length++

        return true
    }

    printList() {
        let temp = this.head
        while (temp) {
            console.log(temp.data)
            console.log("-->")
            temp = temp.nextElement
        }
    }

    delete(index) {
        if (index >= this.length) {
            index = this.length - 1
        }

        let currentIndex = 0
        let temp = this.head
        while (currentIndex !== index - 1) {
            temp = temp.nextElement
            currentIndex++
        }

        let deletedNode = temp.nextElement

        temp.nextElement = temp.nextElement.nextElement

        this.length-- 

        return deletedNode
    }

    reverse() {
        let temp = this.head
        let leader = this.head.nextElement

        this.head = null

        while (leader.nextElement) {

            this.head = leader
            this.head.nextElement = temp

            temp = temp.nextElement
            leader = leader.nextElement
        }

        return true
    }
}

class DoubleLinkNode {
    constructor(value) {
        this.data = value
        this.nextElement = null
        this.previousElement = null
    }
}

class LinkedList {
    constructor(node) {
        this.head = node
        this.tail = node
        this.length = 1
    }

    append(value) {
        let newNode = new Node(value)
        this.tail.nextElement = newNode
        newNode.previousElement = this.tail
        this.tail = newNode
        this.length++
        return true
    }

    prepend(value) {
        let newNode = new Node(value)
        newNode.nextElement = this.head
        this.head = newNode
        this.length++
        return true
    }

    insert(index, value) {
        let newNode = new Node(value)
        let currentIndex = 0
        let temp = this.head

        while (index !== currentIndex + 1) {
            temp = temp.nextElement
            currentIndex++
        }

        newNode.nextElement = temp.nextElement
        temp.nextElement = newNode
        this.length++

        return true
    }

    printList() {
        let temp = this.head
        while (temp) {
            console.log(temp.data)
            console.log("-->")
            temp = temp.nextElement
        }
    }

    delete(index) {
        if (index >= this.length) {
            index = this.length - 1
        }

        let currentIndex = 0
        let temp = this.head
        while (currentIndex !== index - 1) {
            temp = temp.nextElement
            currentIndex++
        }

        let deletedNode = temp.nextElement

        temp.nextElement = temp.nextElement.nextElement

        this.length-- 

        return deletedNode
    }


}