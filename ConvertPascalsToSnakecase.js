function toUnderscore(string) {
    console.log(string)
      let underScores = [string.toString()[0].toLowerCase()]
      let pro = string.toString().split("").slice(1).forEach(function(elt){
         if(elt == Number(elt)){
             underScores.push(elt)
         }
         else if(elt === elt.toLowerCase()){
             underScores.push(elt)
         }
         
         else{
             underScores.push("_")
             underScores.push(elt.toLowerCase())
         }
     })
     
     return underScores.join("")
  }