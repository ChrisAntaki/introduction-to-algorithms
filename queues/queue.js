class Queue {
    constructor() {
        this.list = [];
        this.pointer = 0;
    }

    enqueue(value) {
        this.list.push(value);
    }

    dequeue() {
        var value = this.list[this.pointer++];
        this.optimize();
        return value;
    }

    optimize() {
        if (this.list.length > 0 && this.pointer * 2 > this.list.length) {
            this.list = this.list.slice(this.pointer);
            this.pointer = 0;
        }
    }

    size() {
        return this.list.length - this.pointer;
    }

    peek() {
        return this.list[this.pointer];
    }
}

module.exports = Queue;
