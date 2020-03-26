class BinaryNode {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }
}


class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        let node = new BinaryNode(value)
        
        if (!this.root) {
            this.root = node
            return true
        }

        let temp = this.root

        let placed = false

        while (!placed) {
            if (node.data > temp.data) {
                if (!temp.right) {
                    temp.right = node
                    return true
                } else {
                    temp = temp.right
                }
            } else if (node.data < temp.data) {
                if (!temp.left) {
                    temp.left = node
                    return true
                } else {
                    temp = temp.left
                }
            } else {
                return "This value has already been placed"
            }
        }
    }


    search(value) {
        if (!this.root) {
            return false
        }

        let temp = this.root

        while (temp) {
            if (value > temp.data) {
                temp = temp.right
            } else if (value < temp.data) {
                temp = temp.left
            } else {
                return temp
            }
        }

        return false
    }
}