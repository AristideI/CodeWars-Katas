function alphanumeric(string){
    console.log(string)
    if(string.trim() == ""){
      return false
    }
    
    const checker = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"]
    for(let i = 0; i < string.length; i++){
        if(!checker.includes(string[i])){
            return false
        }
    }
    
    return true
  }