function consonantCount(str) {
    let pro = "bcdfghjklmnpqrstvwxyz"
    let cons = pro.split("")
    let conso = []
    
    for(let i = 0; i < str.length; i++){
      if(cons.includes(str[i].toLowerCase())){
        conso.push(str[i])
      }
      
    }
    return conso.length
  }