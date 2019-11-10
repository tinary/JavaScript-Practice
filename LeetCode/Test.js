
let left = 1;
let right = 22;

let result = [];

for (let i = left; i <= right; i++) {
    //console.log(i);
    let digit = i;
    let valid = true;
    while (digit > 1) {
        let lastDigit = digit % 10;
        
        if (i % lastDigit !== 0) {
            valid = false;
            break;
        }

        digit = Math.floor(digit / 10);
       
    }

    if (valid) {
        result.push(i);
    }
}
console.log(result);



