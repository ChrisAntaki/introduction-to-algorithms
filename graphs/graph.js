class Graph {
    constructor() {
        this.nodes = [void 0];
    }
    
    createNodes(n) {
        while (n--) {
            new GraphNode(this);
        }
    }
    
    addEdge(a, b, distance) {
        var currentDistance = this.nodes[a].edges[b];
        if (currentDistance < distance) {
            return;
        }
        this.nodes[a].edges[b] = distance;
        this.nodes[b].edges[a] = distance;
    }
}

class GraphNode {
    constructor(graph) {
        this.edges = {};
        this.id = graph.nodes.length;
        graph.nodes.push(this);
    }
}
