/*
997. Find the Town Judge

In a town, there are N people labelled from 1 to N.  
There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that 
the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  
Otherwise, return -1.

Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
*/


/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  class Graph {
    constructor() {
      this.adjacencyList = {};
    }
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
    addEdge([v1, v2]) {
      // directed graph
      this.adjacencyList[v1].push(v2);
    }
  }

  let g = new Graph();
  let judge;
  let countJudge = 0;

  for (let i = 1; i <= N; i++) {
    g.addVertex(i);
  }

  for (let k = 0; k < trust.length; k++) {
    g.addEdge(trust[k]);
  }

  for (let j = 1; j <= N; j++) {
    if (g.adjacencyList[j].length === 0) {
      judge = j;
    }
  }

  for (let p = 1; p <= N; p++) {
    if (g.adjacencyList[p].includes(judge)) {
      countJudge += 1;
    }
  }

  // There is always one judge is trusted
  if (N - countJudge === 1) {
    return judge;
  }
  else {
    return -1;
  }

};


console.log(findJudge(2, [[1, 2]]));
console.log(findJudge(3, [[1, 3], [2, 3]]));
console.log(findJudge(3, [[1, 3], [2, 3], [3, 1]]));
console.log(findJudge(3, [[1, 2], [2, 3]]));
console.log(findJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]]));




// function Graph() {
//   this.adjacencyList = {};

//   this.addVertex = function (vertex) {
//     if (!this.adjacencyList(vertex)) this.adjacencyList[vertex] = [];
//   }

//   this.addEdge = function (v1, v2) {
//     this.adjacencyList[v1].push(v2);
//   }
// }

