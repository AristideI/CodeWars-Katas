export function longestConsec(strarr: string[], k: number): string {
    console.log(strarr)
    console.log(k)
    if(strarr.length == 0 || k <= 0 || k > strarr.length)return ""
  const retArr:string[] = []
  const indArr:number[] = []
  for(let i = 0; i <= strarr.length - k; i++){
    retArr.push(strarr.slice(i, i+k).join(""))
    indArr.push(strarr.slice(i, i+k).join("").length)
  }
  
    let a:number = Math.max(...indArr)
    return retArr[indArr.indexOf(a)]
  }