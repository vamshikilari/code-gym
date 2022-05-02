/**
 * @class Graph
 */
class Graph {
  /**
   * @constructor Graph
   * @param {Array<GraphNode>} nodes
   */
  constructor(nodes) {
    this.nodes = nodes;
  }
  getNodes() {
    return this.nodes;
  }
}

export default Graph;
