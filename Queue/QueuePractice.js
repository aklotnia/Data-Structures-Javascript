class Queue {
    
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    getFront() {
        if (!(this.isEmpty())) {
            return this.items[0];
        } else
            return null;
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.items.shift();
        }
    }
}

findBin(num) {
    let q = new Queue
    for (let i = 1; i <= num; i++) {
        let binary = i.toString(2)
        q.enqueue(binary)
    }
    return q.items
}