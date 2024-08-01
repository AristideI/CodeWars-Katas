function findAll(n, k) {
  let results = [];

  function helper(path, start, remainingSum, remainingLength) {
    if (remainingLength === 0 && remainingSum === 0) {
      results.push(path.join(""));
      return;
    }
    if (remainingLength === 0 || remainingSum < 0) {
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      helper(path, i, remainingSum - i, remainingLength - 1);
      path.pop();
    }
  }

  helper([], 1, n, k);

  if (results.length === 0) {
    return [];
  } else if (results.length === 1) {
    return [1, results[0], results[0]];
  } else {
    return [results.length, results[0], results[results.length - 1]];
  }
}

// function findAll(n, k) {
//   let l = Number(k + "0".repeat(k-1))/k
//   let nums = []
//   for(let i = l;i<l*10;i++){
//     let pro = String(i).split("").map(elt=>Number(elt)).every((elt, ind)=>{
//     if(ind === 0){
//         return true
//     }else{
//         if(elt >= String(i)[ind-1]){
//             return true
//         }else{
//             return false
//         }
//     }
//     })

//     if(pro && String(i).split("").reduce((a,b)=>a+Number(b), 0) === n){
//       nums.push(i)
//     }

//   }
//     return nums.length === 0? [] : nums.length === 1? [1,String(nums[0]), String(nums[0])] : [nums.length, String(nums[0]), String(nums[nums.length-1])];
// }
