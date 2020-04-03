class Graph {
    constructor() {
        this.nodes = 0
        this.adjacentList = {}
    }

    addVertex(node) {
        if (this.adjacentList[node]) {
            return false
        }

        this.adjacentList[node] = []
        this.nodes++
        return true
    }

    addEdge(node1, node2) {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            console.log(`Please make sure to add ${node1} and ${node2} to the graph with the addVertex method.`)
            return false
        }

        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)

        return true
    }

    showConnections() {
        if (Object.keys(this.adjacentList).length === 0) {
            return null
        }

        let graphKeys = Object.keys(this.adjacentList)

        for (let i = 0; i < graphKeys.length; i++) {
            let nodeEdges = this.adjacentList[graphKeys[i]]
            if (nodeEdges.length !== 0) {
                for (let j = 0; j < nodeEdges.length; j++) {
                    console.log(graphKeys[i], '-->', nodeEdges[j])
                }
            }
        }
    }
}