// class Graph {
//   constructor() {
//     this.adjaccencyList = {};
//   }
//   addVertex(vertex) {
//     if (!this.adjaccencyList[vertex]) this.adjaccencyList[vertex] = [];
//   }
//   addEdge([v1, v2]) {
//     this.adjaccencyList[v1].push(v2);
//   }
// }

// let g = new Graph();



// // let numCourses = 2;
// // let prerequisites = [[1, 0]];

// let numCourses = 2;
// let prerequisites = [[1,0],[0,1]];

// let courses = numCourses - 1;

// for (let i = 0; i <= courses; i++) {
//   g.addVertex(i);
// }

// for (let j = 0; j < prerequisites.length; j++) {
//   g.addEdge(prerequisites[j]);
// }

// console.log(g);


// console.log(g.adjaccencyList[0].includes());


let number = 19;
let num = [];
let sqrNum = [];

//function isHappy(number) {

  while (number > 1) {
    let isNum = number;
    while (isNum > 0) {
      num.push(isNum % 10);
      isNum = Math.floor(isNum / 10);
    }

    for (i = 0; i < num.length; i++) {
      sqrNum.push(num[i] * num[i]);
    }

    number = sqrNum.reduce(function (a, b) {
      return a + b;
    }, 0);

    num = [];
    sqrNum = [];

    if (number === 1) {
      //console.log(true);
      return true;
    }

    console.log(number);

  }


// if (number === 1 ) {
//   //console.log(true);
//   return true;
// }


// console.log(num);
// console.log(sqrNum);

console.log(isHappy(19));