function removeNb (n) {
    let sum = (n * (n +1))/2
  
    let retArr = []
    for(let a = 1; a <= n; a++){
      let b = (sum - a) / (a + 1)
      if(b <= n && b === Math.floor(b)){
        retArr.push([a,b])
      }
    }
    
    return retArr
  }