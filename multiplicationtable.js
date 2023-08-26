multiplicationTable = function(size) {
    // insert code here
   let res = [];
    
    for (let j = 1; j <= size; j++){
      let arr = [];
      for (let o = 1; o <= size ; o++) {
        arr.push(j * o)
      }
      res.push(arr)
    }
    
    return res;
  }