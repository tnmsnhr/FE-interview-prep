## Q.1
>Implement Graph

```javascript

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    const foundEdges = this.adjacencyList[vertex];
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    const visited = {};
    const result = [];

    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!vertex) return null;

      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });
    })(start);

    return result;
  }

  depthFirstIterative(start) {
    const result = [];
    const stack = [start];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }

    return result;
  }

  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return result;
  }
}

const g = new Graph();

// g.addVertex("delhi")
// g.addVertex("mumbai")
// g.addVertex("kolkata")
// g.addVertex("bangalore")
// g.addVertex("chennai")
// g.addVertex("pune")

// g.addEdge("delhi","kolkata")
// g.addEdge("bangalore","kolkata")
// g.addEdge("delhi","bangalore")
// g.addEdge("delhi","mumbai")
// g.addEdge("delhi","chennai")
// g.addEdge("delhi","pune")
// g.addEdge("bangalore","pune")
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


```
