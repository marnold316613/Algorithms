


// all represent the same graph structure but can be written in multiple ways
//Edge List
 const graph = [[0,2],[2,3],[2,1],[1,3]]
//Adjacent List based on index value, the above can be rewritten
//     index       0      1       2       3    
const graph2 = [[2], [2,3], [0,1,3], [1,2]]
//Adjacent Matrix above can be rewritten this away
const graph3 = [
  [0,0,1,0],
  [0,0,1,1],
  [1,1,0,1],
  [0,1,1,0]
]


class NonDirectionalGraph {
  constructor() {
    this.numberOfNodes =0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1,node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}








module.exports = {
  NonDirectionalGraph:NonDirectionalGraph,
}