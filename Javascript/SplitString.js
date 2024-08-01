function solution(str) {
  const sol = [];
  while (str.length >= 2) {
    sol.push(str.slice(0, 2));
    str = str.slice(2);
  }
  return str ? [...sol, str + "_"] : sol;
}
