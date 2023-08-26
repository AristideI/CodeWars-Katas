function twoArePositive(a, b, c) {
    let f = [a,b,c]
    let positive = []
    // let negative = []
    // let zeros = []
    
    f.forEach(function(e){
        // if(e < 0){
        //     negative.push(e)
        // }
        
        if(e > 0){
            positive.push(e)
        }
        
    })
    
    return positive.length===2
        
    }