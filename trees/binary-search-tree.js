function BinaryTreeNode(data, parent) {
    this.data = data;
    this.left = undefined;
    this.parent = parent;
    this.right = undefined;
}

BinaryTreeNode.prototype.insert = function(data) {
    var direction = (data < this.data) ? 'left' : 'right';
    if (this[direction]) {
        // Recurse
        return this[direction].insert(data);
    } else {
        // Create
        this[direction] = new BinaryTreeNode(data, this);
        return this[direction];
    }
};

BinaryTreeNode.prototype.getSmallestDescendant = function() {
    if (this.left) {
        return this.left.getSmallestDescendant();
    } else {
        return this;
    }
};

BinaryTreeNode.prototype.getLargestDescendant = function() {
    if (this.right) {
        return this.right.getLargestDescendant();
    } else {
        return this;
    }
};

BinaryTreeNode.prototype.getNextInOrder = function() {
    if (this.right) {
        return this.right.getSmallestDescendant();
    }

    var node = this;
    while (node.parent) {
        node = node.parent;

        if (this.data < node.data) {
            return node;
        }
    }

    return null;
};

BinaryTreeNode.prototype.traverseInOrder = function() {
    if (this.left) {
        this.left.traverseInOrder();
    }

    console.log(this.data);

    if (this.right) {
        this.right.traverseInOrder();
    }
};

BinaryTreeNode.prototype.getRoot = function() {
    if (this.parent) {
        return this.parent.getRoot();
    } else {
        return this;
    }
};

BinaryTreeNode.prototype.summarize = function() {
    var message = '\t' + this.data + '\n';
    if (this.left) {
        message += this.left.data;
    } else {
        message += 'NULL';
    }
    message += '\t\t';
    if (this.right) {
        message += this.right.data;
    } else {
        message += 'NULL';
    }
    console.log(message);
};

BinaryTreeNode.prototype.delete = function(data) {
    if (data === undefined || this.data === data) {
        // Delete
        var direction;
        if (this.parent) {
            direction = (this === this.parent.left) ? 'left' : 'right';
        }

        // Simply unlink descendant-less nodes
        if (!this.left && !this.right) {
            if (this.parent) {
                this.parent[direction] = undefined;
            }

            return true;
        }

        if (this.left && this.right) {
            var replacement = this.right.getSmallestDescendant();
            this.data = replacement.data;
            replacement.delete();
        } else if (this.left || this.right) {
            var replacement = this.left || this.right;
            this.data = replacement.data;
            this.left = replacement.left;
            this.right = replacement.right;

            if (this.left) {
                this.left.parent = this;
            }

            if (this.right) {
                this.right.parent = this;
            }
        } else {
            // Bail
            return false;
        }
    } else {
        // Search
        var direction = (data < this.data) ? 'left' : 'right';
        if (this[direction]) {
            // Recurse
            return this[direction].delete(data);
        } else {
            // Bail
            return false;
        }
    }
};


// Tests
if (!module.parent) {
    var tree = new BinaryTreeNode('X-Ray');

    tree.insert('Foxtrot');
    tree.insert('Echo');
    tree.insert('Charlie');
    tree.insert('Golf');
    tree.insert('India');
    tree.insert('Alpha');
    tree.insert('Bravo');
    tree.insert('Delta');
    tree.insert('Hotel');

    tree.delete('X-Ray');

    console.log('Traverse in Order:');
    console.log('---');
    tree.traverseInOrder();
    console.log('---\n\n');
    console.log('Root element:');
    console.log('---');
    tree.summarize();
    console.log('---\n\n');
    console.log('Get Next in Order:');
    console.log('---');
    tree.getNextInOrder().summarize();
    console.log('---\n\n');
    console.log('Moving to the left of root element:');
    console.log('---');
    tree = tree.left;
    tree.summarize();
    console.log('---\n\n');
    console.log('Get Next in Order:');
    console.log('---');
    tree.getNextInOrder().summarize();
    console.log('---\n\n');
}
