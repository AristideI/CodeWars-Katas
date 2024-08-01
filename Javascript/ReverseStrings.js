function solution(str) {
  return str.split("").reverse().join("");
}
function makeNegative(num) {
  return num < 0 ? num : num * -1;
}
function positiveSum(arr) {
  return arr.filter((elt) => elt > 0).reduce((a, b) => a + b, 0);
}
