function lastDigit(n=6) {
    let mul = 1;
      for(let i = 1; i <= n; i++){
    mul*=i
      }
      
    let mul2 = String(mul) 
    let fin = ''
    for(let i = mul2.length; i<0;i--){
      if(mul2[i] != "0"){
        fin = Number(mul2[i])
        break
      }
    }
      
      return fin
    }
    