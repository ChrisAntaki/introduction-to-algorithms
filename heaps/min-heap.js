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
        var data = this.nodes.pop();
        if (this.nodes.length === 0) {
            return;
        }

        var parent = 0;
        this.nodes[parent] = data;
        while (true) {
            var left = (parent * 2) + 1;
            var right = left + 1;
            var min;
            if (left < this.nodes.length && this.nodes[left].key < this.nodes[parent].key) {
                min = left;
            } else {
                min = parent;
            }
            if (right < this.nodes.length && this.nodes[right].key < this.nodes[min].key) {
                min = right;
            }
            if (min === parent) {
                break;
            }
            this.swap(parent, min);
            parent = min;
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
