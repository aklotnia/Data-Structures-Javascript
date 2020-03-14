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
}