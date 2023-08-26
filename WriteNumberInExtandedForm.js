function expandedForm(num) {

    let str = String(num).split("")
    let arr = []
    let len = str.length
    let c = 1
    
    
    for(let i = 0; i < len; i++ ){
        let a = str[i]
        if(a == 0){
          c++
            continue
        }
        arr.push((a + "0".repeat(len - c)))
        c++
    }
    
    return arr.join(" + ")
}
