var sortArrayByParityII = function(A) {
    let evenCounter = 0;
    let oddCounter = 1;
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            A[i] = A[evenCounter];
            evenCounter = evenCounter + 2;
        }
        else {
            A[i] = A[oddCounter];
            oddCounter = oddCounter + 2;
        }
    }
    return A;
};



var sortArrayByParityII = function(A) {
    let odd = [];
    let even = [];
    let output = [];
    
    for(let i = 0; i < A.length; i++) {
      if(A[i] % 2 === 0) {
          even.push(A[i]);
      }
      else {
          odd.push(A[i]);
      }     
    }
      
    for(let i = 0; i < even.length; i++) {
      output.push(even[i], odd[i]);
      //can do this push 2 parameter becuase we know the array is always half even and half odd.
    }
    return output;
  };