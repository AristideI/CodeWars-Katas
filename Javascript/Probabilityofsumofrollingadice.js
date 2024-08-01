function rolldiceSumProb(sum, num_dice) {
  let ways = 0;

  function countWays(remainingSum, remainingDice) {
    if (remainingDice == 0) {
      return remainingSum == 0 ? 1 : 0;
    }
    let ways = 0;
    for (let i = 1; i <= 6; i++) {
      if (remainingSum - i >= 0) {
        ways += countWays(remainingSum - i, remainingDice - 1);
      }
    }
    return ways;
  }

  ways = countWays(sum, num_dice);
  return ways / Math.pow(6, num_dice);
}
