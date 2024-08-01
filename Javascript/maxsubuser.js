var maxSequence = function(arr){
    let maxSoFar = 0;
    let maxEndingHere = 0;
  
    for (let num of arr) {
      maxEndingHere = Math.max(0, maxEndingHere + num);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
  
    return maxSoFar;
  }