export function sumOfDivided(lst: number[]): number[][] {
  let primes: number[] = [];
  const sums: number[][] = [];
  lst
    .map((elt) => Math.abs(elt))
    .forEach((elt) => {
      let che: boolean = false;
      for (let i = 2; i <= elt / 2; i++) {
        if (elt % i === 0) {
          che = true;
          if (!primes.includes(i)) {
            primes.push(i);
          }
        }
      }

      if (!che) {
        primes.push(elt);
      }
    });

  console.log(primes);

  primes = [
    ...new Set(
      primes
        .filter((elt) => {
          for (let i = 2; i * i <= elt; i++) {
            if (elt % i === 0) return false;
          }
          return true;
        })
        .sort((a, b) => a - b)
    ),
  ];

  primes.forEach((pri) => {
    let addi: number = 0;
    lst.forEach((pro) => {
      if (pro % pri === 0) {
        addi += pro;
      }
    });
    sums.push([pri, addi]);
  });

  console.log(primes);

  return sums;
}

//console.log(sumOfDivided([12, 15]));
//console.log(sumOfDivided([15, 21, 24, 30, 45]));
console.log(sumOfDivided([482, 980, 893, 19, -816, 88, 421, 330, 797, -638]));
