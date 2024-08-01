function sumUpNumbers(arr) {
    console.log(arr)
    let numbers = []
    let addition = 0 
    for (num of arr) {
      let sign = []
      for (let i = 0; i < num.length; i++) {
        if (num[i] == ","){
          sign.push(",")
          }
        else if (num[i] == ".") {
          sign.push(".")
        }      
      }
      
      if (sign[0] == ",") {
        let lil = []
        for (let o = 0; o < num.length; o++) {
          if (num[o] == ",") {
            continue
          }
          else {
            lil.push(num[o])
          }
          
        }
        
        numbers.push(Number(lil.join("")))
      }
      else if (sign[0] == ".") {
        let lil = []
        for (let o = 0; o < num.length; o++) {
          if (num[o] == ",") {
            lil.push(".")
          }
          else if(num[o] == ".") {
            continue
          }
          else {
            lil.push(num[o])
          }
          
        }
        
        numbers.push(Number(lil.join("")))
      }
      
      else {
        numbers.push(Number(num))
      }
    }
    
    for (let u = 0; u < numbers.length; u++) {
      addition += numbers[u]
    }
    
  
    return addition.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }