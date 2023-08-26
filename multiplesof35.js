function solution(number){
    var pro = [];
    var sum = 0;
    if (number > 0){
    for (var i = 0; i < number; i++) {
      if (i % 3 == 0) {
        pro.push(i)
      }
      
      else if (i % 5 == 0) {
        pro.push(i)
      }
      else {
        
      }
      }
      for (var o = 0; o < pro.length; o++) {
        sum += pro[o]
      }
  
      return sum;
    }
      else {
          return 0
      }
      
  
  }