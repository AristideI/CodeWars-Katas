function multipleOfIndex(array) {
    let pro = []
    for (let i =0; i < array.length; i++){
      if(array[i] % i === 0){
        pro.push(array[i])
      }
    }
    
    return pro
  }
  