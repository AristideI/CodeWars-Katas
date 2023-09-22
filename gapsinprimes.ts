export const gap = (g: number, m: number, n: number): number[] | null => {
  let primes: number[] = [2, 3];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  for (let o = 0; o < primes.length - 1; o++) {
    if (primes[o + 1] - primes[o] === g) {
      return [primes[o], primes[o + 1]];
    }
  }

  return null;
};

function isPrime(n: number): boolean {
  if (n === 2 || n === 3) return true;
  if (n <= 1 || n === 4) return false;
  for (let i = 5; i <= n / 2; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

export const gap2 = (g: number, m: number, n: number): number[] | null => {
  let lastPrime: number | null = null;

  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (lastPrime !== null && i - lastPrime === g) {
        return [lastPrime, i];
      }
      lastPrime = i;
    }
  }

  return null;
};

function isPrime2(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
