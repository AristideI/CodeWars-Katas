export function sumPairs(ints: number[], s: number): [number, number] | void {
  let seen: Set<number> = new Set();

  for (let num of ints) {
    if (seen.has(s - num)) {
      return [s - num, num];
    }
    seen.add(num);
  }

  return undefined;
}
