let numArray = [1,2,3,2,2];

var counts = {};
var compare = 0;
var mostFrequent;

let A = [1,2,3,2,2];


(function(array){
   for(let i = 0; i < array.length; i++){
       let num = array[i];
       
       if(counts[num] === undefined){
           counts[num] = 1;
       }
       else{
           counts[num] = counts[num] + 1;
       }

       if(counts[num] > compare){
             compare = counts[num];
             mostFrequent = numArray[i];
       }
    }
  return mostFrequent;
})(numArray);

console.log(mostFrequent);



var repeatedNTimes = function(A) {
    
    let count = {};
    let compare = 0;
    let mostFrequent;
    
    for (let i = 0; i < A.length ; i++) {
        let num = A[i];
        
        if (count[num] === undefined) {
            count[num] = 1;
        }
        else {
            count[num] = count[num] + 1;
        }
        
        if (count[num] > compare) {
            compare = count[num];
            mostFrequent = A[i];
        }  
    }
    return mostFrequent; 
};

