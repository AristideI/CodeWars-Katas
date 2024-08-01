function mostLikely(prob1,prob2){
    let [a,b] = prob1.split(':')
    let [c,d] = prob2.split(':')
    
    return a/b > c/d
  }