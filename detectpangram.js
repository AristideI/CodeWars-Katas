function isPangram(string){
    let rist = []
    for (let i = 0; i < string.length; i++){
      if (rist.indexOf(string[i]) == -1){
        rist.push(string[i])
      }
    }
    return rist.length > 26
  }