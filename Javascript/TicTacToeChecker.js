function isSolved(board) {
    let pro = 0
    board.forEach(function(elt){
        elt.forEach(function(elts){
            if(elts === 0){
                pro++
            }
        })
    })
    
   
    
    let [a,b,c] = board
    let one = 1
    let two = 2
    
    if(
        (a[0] === one && a[1] === one && a[2] === one)||
        (b[0] === one && b[1] === one && b[2] === one)||
        (c[0] === one && c[1] === one && c[2] === one)||
        (a[0] === one && b[0] === one && c[0] === one)||
        (a[1] === one && b[1] === one && c[1] === one)||
        (a[2] === one && b[2] === one && c[2] === one)||
        (a[0] === one && b[1] === one && c[2] === one)||
        (a[2] === one && b[1] === one && c[0] === one)
        ){
            return 1
        }
        
    if(
        (a[0] === two && a[1] === two && a[2] === two)||
        (b[0] === two && b[1] === two && b[2] === two)||
        (c[0] === two && c[1] === two && c[2] === two)||
        (a[0] === two && b[0] === two && c[0] === two)||
        (a[1] === two && b[1] === two && c[1] === two)||
        (a[2] === two && b[2] === two && c[2] === two)||
        (a[0] === two && b[1] === two && c[2] === two)||
        (a[2] === two && b[1] === two && c[0] === two)
        ){
            return 2
        }
    

    else{
         if(pro > 0){
        return -1
    }
        return 0
    }
}

isSolved([[1,1,1],[2,1,2],[2,1,0]])