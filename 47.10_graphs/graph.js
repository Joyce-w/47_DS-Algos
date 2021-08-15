class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    //loop thru the array
    for (let vertex of vertexArray) {
    //call addVertex on each node    
    this.nodes.add(vertex)  
    }

  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2)
    v2.adjacent.delete(v1)
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    //use queue to keep track of list starting from 'start'
    // let toVisitQueue = [start];
    // let seen = new Set();
    let result = [start.value];
    function depthSearch(start, seen = new Set([start])) {

      //iterate thru adjacents
      for (let neighbor of start.adjacent) {
        console.log(neighbor)
        //if it is not in set, add it to set
        if (!seen.has(neighbor)) {
          //add to seen
          seen.add(neighbor)
          result.push(neighbor.value)
        //recurse thru the neighbor
        depthSearch(neighbor, seen)          
        }
      }
      return seen
    }
    depthSearch(start)

    return result
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    //holds the values of nodes that were visited
    let result = [];
    //makes sure a node was not visited more than once
    let visited = new Set();
    //queue to make sure nodes are visited BFS
    let toVisitQueue = [start]
    
    let current;
    visited.add(start);
    //loop while there is something in queue
    while (toVisitQueue.length) {
      //find first node of queue
      current = toVisitQueue.shift()
      console.log(current)
      result.push(current.value);

      //loop adjacent and check if they were seen, if not add to queue
      current.adjacent.forEach(neighbor => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          toVisitQueue.push(neighbor)
        }
      })
    }

    return result;
  }
}

module.exports = {Graph, Node}