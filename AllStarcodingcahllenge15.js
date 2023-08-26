function rotate(str){
    //code here
          let a = str.split("")
        let b = []
        a.forEach(function(s){
            b.push(s)
        })
        let c = []
        for(let i = 0; i < str.length; i++){
                b.push(b[0])
                b.shift()
                c.push(b.join(""))
    }
        
        
        return c
    
    }