export const gap = (g: number, m: number, n: number): number[] | null => {
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

function isPrime(n: number): boolean {
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
