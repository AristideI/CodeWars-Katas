function typist(s){
    let a = 0
    let b = false
    
    for(let i = 0; i < s.length; i++){
        let c = s[i]
        if(c === c.toLowerCase()){
            if(!b){
                a++
            }
            else{
                a += 2
                b = false
            }
        }
        
        else{
            if(!b){
                a += 2
                b = true
            }
            else{
                a++
            }
    }
    
}
    return a
    
}