function squareSum(nums) {
  return nums.map((elt) => elt * elt).reduce((a, b) => a + b, 0);
}
