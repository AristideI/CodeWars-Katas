function addLength(str) {
    let a = str.split(" ")
    let alll = []
    
    for (let i = 0; i < a.length; i++) {
      alll.push(a[i] + " " + a[i].length)
    }
      
      return alll
      
      
    }