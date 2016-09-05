class MinHeap {
    constructor() {
        this.nodes = [];
    }

    swap(a, b) {
        var data = this.nodes[a];
        this.nodes[a] = this.nodes[b];
        this.nodes[b] = data;
    }

    add(data) {
        // Insert
        var current = this.nodes.length;
        this.nodes[current] = data;

        // Sort
        while (current > 0) {
            var isLeft = current % 2 === 1;
            var offset = isLeft ? 1 : 2;
            var parent = (current - offset) / 2;
            if (this.nodes[parent].key < this.nodes[current].key) {
                break;
            }
            this.swap(parent, current);
            current = parent;
        }
    }

    pop() {
        var current = 0;
        var newData = this.nodes.pop();
        if (current === this.nodes.length) {
            return;
        }
        this.nodes[current] = newData;
        while (true) {
            var left = current * 2 + 1;
            var right = left + 1;
            if (
                (
                    this.nodes[left]
                    &&
                    this.nodes[current].key > this.nodes[left].key
                )
                ||
                (
                    this.nodes[right]
                    &&
                    this.nodes[current].key > this.nodes[right].key
                )
            ) {
                var target;

                if (this.nodes[right] === undefined || this.nodes[left].key < this.nodes[right].key) {
                    target = left;
                } else {
                    target = right;
                }
                var temp = this.nodes[current];
                this.nodes[current] = this.nodes[target];
                this.nodes[target] = temp;
                current = target;
                continue;
            }
            break;
        }
    }

    extract() {
        var node = this.min();
        this.pop();
        return node;
    }

    min() {
        return this.nodes[0];
    }

    size() {
        return this.nodes.length;
    }
}

module.exports = MinHeap;
