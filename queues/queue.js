class Queue {
    constructor() {
        this.list = [];
        this.index = 0;
    }

    enqueue(value) {
        this.list.push(value);
    }

    dequeue() {
        var value = this.list[this.index++];
        if (this.index * 2 > this.list.length) {
            console.log('Optimize, optimize');
            this.list = this.list.slice(this.index);
            this.index = 0;
        }
        return value;
    }

    size() {
        return this.list.length - this.index;
    }

    peek() {
        return this.list[this.index];
    }
}

module.exports = Queue;
