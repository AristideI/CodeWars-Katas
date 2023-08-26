function findOutlier(integers){
    let odds = []
    let evens = []
    
    integers.forEach(function(i) {
      if(i % 2 === 0){
        evens.push(i)
      }
      else{
        odds.push(i)
      }
    })
    
    if(odds.length === 1) {
      return Number(odds.join(""))
    }
    else{
      return Number(evens.join(""))
    }
  }