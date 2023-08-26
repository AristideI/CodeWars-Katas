function verifyLatinSquare(array, m) {
    let pro = true
    let proo = []
    for(let i = 1; i<=m;i++){
        proo.push(i)
    }
    
    if(array.length != m){
        return "Array is wrong size"
    }
    
    for(let i = 0; i < m; i++){
        if(array[i].length != m){
            return "Array not square"
        }
        for(let j = 0; j < m; j++){
            if(proo.includes(array[i][j]) == false){
                return "Array is wrong size"
            }
        }
    }
    
  return "Valid latin square of size " + m
  }