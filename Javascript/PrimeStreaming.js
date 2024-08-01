class Primes {
  static *stream() {
    // replace this with your solution
    let x = 2;
    while (true) {
      if (isPrime(x)) {
        yield x++;
      } else {
        x++;
      }
    }
  }
}

function isPrime(num) {
  if (num === 2 || num === 3) return true;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
Primes.stream().next();
