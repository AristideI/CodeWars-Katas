// function trailingZeros(num, base){
//   if(num===0)return 0
//  let primes = prime(base)
//  let count = 0
//  primes = [primes[primes.length-1]]
//  primes.forEach(elt=>{
//      let pow = 1
//      let a = num
//      while(a/(elt**pow)>0){
//          count+=Math.floor(a/(elt**pow))
//          pow++
//      }
//  })

//  return count

// //return primes

// }

// function prime(n){
//     if(n===2)return[2]
//     if(n===10)return[5]
//     let primes = []
//     for(let i = 2; i<=n/2; i++){
//         if(n%i===0){
//             primes.push(i)
//         }
//     }

//     primes = [
//     ...new Set(
//       primes
//         .filter((elt) => {
//           for (let i = 2; i * i <= elt; i++) {
//             if (elt % i === 0) return false;
//           }
//           return true;
//         })
//         .sort((a, b) => a - b)
//     ),
//   ];

//   return primes
// }

function trailingZeros(num, base) {
  let factors = primeFactors(base);
  let minZeros = Infinity;

  for (let [prime, power] of factors) {
    let count = 0;
    let div = prime;
    while (div <= num) {
      count += Math.floor(num / div);
      div *= prime;
    }
    minZeros = Math.min(minZeros, Math.floor(count / power));
  }
  return minZeros;
}

function primeFactors(n) {
  let factors = new Map();

  // Count the number of times 2 divides n
  while (n % 2 === 0) {
    factors.set(2, (factors.get(2) || 0) + 1);
    n = n / 2;
  }

  // n must be odd at this point. Check for factors from 3 onwards.
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.set(i, (factors.get(i) || 0) + 1);
      n = n / i;
    }
  }

  // If n is a prime greater than 2, it will remain as a factor.
  if (n > 2) {
    factors.set(n, (factors.get(n) || 0) + 1);
  }

  return factors;
}
