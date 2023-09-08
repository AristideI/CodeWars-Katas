// export const zeroes = (base: number, num: number): number => {
//   const primes: number[] = [];
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0 && isPrime(i)) {
//       primes.push(i);
//     }
//   }

//   console.log(primes);

//   const dep: number = Math.max(...primes);
//   let count: number = 0;
//   let pow: number = 1;
//   while (num / dep ** pow > 0) {
//     count += Math.floor(num / dep ** pow);
//     pow++;
//   }

//   return count;
// };

// function isPrime(n: number): boolean {
//   if (n === 2 || n === 3) return true;
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

function zeroes(num: number, base: number): number {
  [num, base] = [base, num];
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

function primeFactors(n: number) {
  let factors = new Map();
  while (n % 2 === 0) {
    factors.set(2, (factors.get(2) || 0) + 1);
    n = n / 2;
  }
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.set(i, (factors.get(i) || 0) + 1);
      n = n / i;
    }
  }
  if (n > 2) {
    factors.set(n, (factors.get(n) || 0) + 1);
  }

  return factors;
}

console.log(zeroes(40, 10));
