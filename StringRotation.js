function shiftedDiff(first, second) {
  if (first === second) return 0;
  let count = 0;
  for (let i = 0; i < first.length; i++) {
    if (first == second) {
      return count;
    } else {
      first = first[first.length - 1] + first.slice(0, first.length - 1);
      count++;
    }
  }

  return -1;
}
