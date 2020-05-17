/*
207. Course Schedule

There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, 
which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

*/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  class Graph {
    constructor() {
      this.adjaccencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjaccencyList[vertex]) this.adjaccencyList[vertex] = [];
    }
    addEdge([v1, v2]) {
      this.adjaccencyList[v1].push(v2);
    }
  }

  let g = new Graph();
  let numCourses = 2;
  let prerequisites = [[1, 0]];

  for (let i = 0; i < numCourses - 1; i++) {
    g.addVertex(i);
  }

  
  
  console.log(g);

};

