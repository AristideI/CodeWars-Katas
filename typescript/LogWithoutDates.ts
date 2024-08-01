export function checkLogs(log: string[]): number {
    if(log.length === 0) return 0;
    if(log.length === 1) return 1;
    
    let days : number = 1
    
    for(let i = 1; i < log.length; i++){
      if(log[i] <= log[i-1]){
        days++
      }
    }
    return days
  }