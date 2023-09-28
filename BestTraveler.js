function chooseBestSum(t, k, ls) {
  if (k > ls.length) return null;

  let bestSum = -1;

  function helper(start, count, sum) {
    // If we've selected k towns
    if (count === k) {
      if (sum <= t && sum > bestSum) {
        bestSum = sum;
      }
      return;
    }

    // If no more towns to visit
    if (start >= ls.length) return;

    // Visit the current town
    helper(start + 1, count + 1, sum + ls[start]);

    // Or skip it
    helper(start + 1, count, sum);
  }

  helper(0, 0, 0);

  return bestSum !== -1 ? bestSum : null;
}
