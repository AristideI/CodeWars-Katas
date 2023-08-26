export function order(words:string):string{
  let numArr : string[] = []
  let wordss = words.split(" ")
  for(let i = 1; i<= 9; i++){
    wordss.forEach(elt=>{
      if(elt.includes(String(i))){
        numArr.push(elt)
      }
    })
  }
  return numArr.join(" ")
}