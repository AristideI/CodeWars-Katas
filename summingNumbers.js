function sumDigits(number) {
    let pro = String(number)
    let pra = []
    let digit = [1,2,3,4,5,6,7,8,9,0]
    
    for (let i = 0; i < pro.length;i++){
        if(digit.includes(Number(pro[i]))) {
          pra.push(Number(pro[i]))
          
        }
    }
    
    
    let proo = 0
    for (let i = 0; i < pra.length;i++){
      proo = proo + pra[i]
    }
    
    return proo
  }