export function tribonacci([a, b, c]: [number, number, number], n: number): number[] {
    if(n === 0)return []
    if(n === 1)return [a]
    if(n === 2)return [a,b]
    if(n === 3)return [a,b,c]
    let myArr:number[] = [a,b,c]
    let ind:number = 3
    
    while(ind < n){
      myArr.push(myArr[ind-3]+myArr[ind-1]+myArr[ind-2])
      ind++
    }
    
    return myArr
  }