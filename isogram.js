function isIsogram(str){
    let a = [...(str.toLowerCase())]
    let b = [...(new Set(a))]
    
    return a.length === b.length
  }