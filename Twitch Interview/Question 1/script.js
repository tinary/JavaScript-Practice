function solution() {
    const x =document.getElementsByTagName("td");
    let letter = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i].style.color !== x[i].style.backgroundColor){
          letter = letter + x[i].textContent;
      }
    }
    console.log(letter);
    return letter;
    
    
  }
  solution();
  //console.log(x[i].textContent);