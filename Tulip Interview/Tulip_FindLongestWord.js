const dictionary = [
    'hello',
    'world',
    'lipstick',
    'lip'
  ];
  
  function lw(word) {
    if (word.length === 0) return null;
  
    if (dictionary.includes(word)) {
      return word;
    } 
    else {
      const a = lw(word.slice(1, word.length)) || '';
      const b = lw(word.slice(0, word.length - 1)) || '';
      //return a.length > b.length ? a : b;
      if (a.length > b.length) {
          return a;
      }
      else {
          return b;
      }
    }
  }
  
  console.log(lw('clipstickjk'));