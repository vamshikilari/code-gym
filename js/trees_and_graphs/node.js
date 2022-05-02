/**
 *
 * @param {*} data
 * @param {GraphNode} adjacentNodes
 * @returns
 */
class GraphNode {
  constructor(data, adjacentNodes, type) {
    this.data = data;
    this.adjacentNodes = adjacentNodes;
    this.type = type;
  }

  getAdjacent() {
    return this.adjacentNodes;
  }

  getData() {
    return this.data;
  }
}

export default GraphNode;
