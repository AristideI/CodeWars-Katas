export function persistence(num: number): number {
    if(num.toString().length == 1) return 0; 
     let counter:number = 0
    let pro: number = num;
     while(pro.toString().length != 1){
       pro = Number(pro.toString().split("").map(elt => Number(elt)).reduce((a,b)=>a*b))
       counter++
     }
     return counter
   }