function catMouse(x, j){
    console.log(x)
    if(x.includes("C") == false || x.includes("D") == false || x.includes("m") == false){
      return "boring without all three"
    }
    
    if(x.indexOf("C") +1 == x.indexOf("m") || x.indexOf("C") -1 == x.indexOf("m")){
        return "Caught!"
    }
    
    
    
    if(x.indexOf("C") < x.indexOf("m")){
          
    
       if(x.indexOf("C") + j > x.indexOf("m")){
           if(x.indexOf("C") < x.indexOf("D") < x.indexOf("m")){
        return "Protected!"
    }
            return "Caught!"
        }
        else{
            if(x.indexOf("C") < x.indexOf("D") < x.indexOf("m")){
        return "Protected!"
    }
            return "Escaped!"
        }
    }
    
    if(x.indexOf("C") > x.indexOf("m")){
          
       if(x.indexOf("C") > x.indexOf("m") - j){
            if(x.indexOf("C") > x.indexOf("D") > x.indexOf("m")){
        return "Protected!"
    }
            return "Caught!"
        }
        else{
            if(x.indexOf("C") > x.indexOf("D") > x.indexOf("m")){
        return "Protected!"
    }
            return "Escaped!"
        }
    }
}  