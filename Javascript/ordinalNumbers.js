function ordinal(number, brief) {
    let pro = number.toString().split("")[number.toString().length - 1]
    if(number == 1){
        return `st`
    }
    
    if(number >= 10 && number <= 20 ){
        return `th`
    }
    
    if(number.toString().length > 2){
        let pri = number.toString().split("").slice(number.toString().length-2).join("")
        
        if(pri >= 10 && pri <= 20 ){
        return `th`
    }
    
    if(pri == 21){
        return `st`
    } 
    
    else if(pri == 2){
        return (brief === false || brief === undefined ) ? `nd` : `d`
    } 
    
    else if(pri == 3){
        return (brief === false || brief === undefined) ? `rd` : `d`
    } 
     
    else{
        return `th`
    }
    
    }
    
    if(pro == 1){
        return `st`
    } 
    
    else if(pro == 2){
        return (brief === false || brief === undefined ) ? `nd` : `d`
    } 
    
    else if(pro == 3){
        return (brief === false || brief === undefined) ? `rd` : `d`
    } 
     
    else{
        return `th`
    }    
        
    
    }