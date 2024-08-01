export function inArray(a1: string[], a2: string[]): string[] {
    const arr:string[] = []
  a1.forEach((elt)=>{
    a2.forEach(elet=>{
      if(elet.includes(elt)){
        arr.push(elt)
      }
    })
  })
    return [...new Set(arr.sort())]
  }