export const distinct = (a: number[]): number[] => {
    let arr:number[] = []
    a.forEach((elt)=>{
      if(!arr.includes(elt)){
        arr.push(elt)
      }
    })
    return arr
  }