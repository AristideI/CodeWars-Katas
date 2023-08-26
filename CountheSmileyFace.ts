//return the total number of smiling faces in the array
export function countSmileys(arr: string[]):number {
    if(arr.length === 0) return 0;
    let count:number = 0
    arr.forEach(elt=>{
        if(elt.includes(":-)") || elt.includes(":-D") || elt.includes(":~)") || elt.includes(":~D") || elt.includes(";-)") || elt.includes(";-D") || elt.includes(";~)") || elt.includes(";~D") || elt.includes(";D") || elt.includes(":D") || elt.includes(";)") || elt.includes(":)")){
           count++
          }
    })
    
    return count
  }