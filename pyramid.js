// function findNb(m) {
//     let number = 1
//     let sum = 0
//     while(sum < m){
//       sum += number**3
//       number ++
//     }
//   return sum===m ? number-1 : -1

// }

function findNb(m) {
  let number = 1;
  let sum = 0;

  while (sum < m) {
    sum += number * number * number;
    if (sum > m) {
      return -1;
    }
    number++;
  }

  return sum === m ? number - 1 : -1;
}
