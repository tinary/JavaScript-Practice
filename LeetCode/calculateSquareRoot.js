// Write a function that calculates square root of a given number

function sqrRoot(num) {
  let s = num;

  if (num < 0) {
    return "please enter positive number";
  }
  else if (num === undefined) {
    return "please enter a valid number";
  }

  while ((s - num/s) > 0) {
    s = (s + num/s) / 2;
  }
  return s;
}

console.log(sqrRoot(-4));
console.log(sqrRoot());
console.log(sqrRoot(9));