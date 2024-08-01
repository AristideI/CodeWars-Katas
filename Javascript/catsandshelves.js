function solution(start, finish) 
{
    let answer = (finish - start) / 3
  if ((finish - start) % 3 === 0) {
      return answer
  }
  
  else {
      let ones = 0
      let rem = answer - Math.floor(answer)
      let rem2 = rem * 3
      
      
      return Math.round(rem2) + Math.floor(answer)
      
      
}
}