export function dblLinear(n: number): number {
  let nums: number[] = [1];
  let counter: number = 0;
  while (nums.length <= n) {
    nums.push(nums[counter] * 2 + 1);
    nums.push(nums[counter] * 3 + 1);
    counter++;
    nums = [...new Set(nums.sort((a, b) => a - b))];
  }
  console.log(nums);

  return [...new Set(nums)][n];
}

export function dblLinear2(n: number): number {
  let u: number[] = [1];
  let xi = 0; // pointer for y = 2*x + 1
  let yi = 0; // pointer for z = 3*x + 1

  while (u.length <= n) {
    let nextX = 2 * u[xi] + 1;
    let nextY = 3 * u[yi] + 1;

    if (nextX < nextY) {
      u.push(nextX);
      xi++;
    } else if (nextX > nextY) {
      u.push(nextY);
      yi++;
    } else {
      // nextX and nextY are equal
      u.push(nextX);
      xi++;
      yi++;
    }
  }

  return u[n];
}

console.log(dblLinear(20));
