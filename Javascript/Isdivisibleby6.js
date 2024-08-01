function isDivisibleBy6(s) {
    let a = s.split("")
    let b = []
    let c = a.indexOf("*")
    console.log(a[c])
    for(let i = 0; i<10; i++){
        a[c] = i
        if(BigInt(a.join("")) % BigInt(6) == BigInt(0)){
            b.push(a.join(""))
        }
    } 
    
    return b
  }