function distinct(a){
    const arr = [];
    a.forEach((elt)=>{
      if(!arr.includes(elt)){
        arr.push(elt)
      }
    })
  
  return arr
  }