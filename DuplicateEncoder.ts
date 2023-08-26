export function duplicateEncode(word: string):string {
    const pro:string[] = word.toLowerCase().split("")
    let retArr:string[] = []
    pro.forEach(elt=>{
    const check:string[] = [...pro]
      check.splice(check.indexOf(elt), 1)
      if(check.includes(elt)){
        retArr.push(")")
      }
      else{
        retArr.push("(")
      }
    })
  return retArr.join("")
}