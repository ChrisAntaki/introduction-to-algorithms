class MinHeap {
    constructor() {
        this.nodes = [];
    }
    
    add(data) {
        var current = this.nodes.length;
        this.nodes[current] = data;
        while (current > 0) {
            var isLeft = current % 2 === 1;
            var parent;
            if (isLeft) {
                parent = (current - 1) / 2;
            } else {
                parent = (current - 2) / 2;
            }
            if (this.nodes[parent].key < this.nodes[current].key) {
                break;
            }
            var temp = this.nodes[parent];
            this.nodes[parent] = this.nodes[current];
            this.nodes[current] = temp;
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
