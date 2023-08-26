function powerOf4(n) {
    if((typeof n) != "number"){
      return false
    }
    
    let a = Math.log(n) / Math.log(4)
    return Number.isInteger(a)
    
  }