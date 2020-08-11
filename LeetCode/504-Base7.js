// Giving a number representing in some base, returning the string representation of that number. 

function convertToBase(number, base) {
  return number.toString(base);
}

console.log(convertToBase(123, 10));  // '123'
console.log(convertToBase(11, 2));  // '1011'