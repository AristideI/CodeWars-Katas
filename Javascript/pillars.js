function pillars(numPill, dist, width) {
    if (numPill < 1){
      return null;
    }
    
    if (dist < 10 || dist > 30) {
      return null;
    }
    
    if (width < 10 || width > 50) {
      return null;
    }
    
    let totalW = 0;
    
    if (numPill == 1){
      totalW = 0
    }
    
    else if(numPill == 2) {
      totalW = 0
    }
    
    else {
      totalW = ((numPill - 2) * width)
      
    }
  
    
    let distInCm = dist * 100
    
    let totalD = ((numPill - 1) * distInCm)
    
    return totalD + totalW
  }