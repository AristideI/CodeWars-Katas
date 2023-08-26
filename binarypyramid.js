function binaryPyramid(m,n){
    let final = 0
    
    for(let i = m; i <= n; i++){
      final += Number(i.toString(2))
    }
      
      return final.toString(2)
    }
    