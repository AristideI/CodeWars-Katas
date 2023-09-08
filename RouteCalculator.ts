export const calculate = (sum: string): string | number => {
  const separates: string[] = [];
  const signs: string[] = ["+", "-", "*", "$"];
  const allowed: string[] = [..."1234567890."];

  let nums: string[] = [];

  for (let i = 0; i < sum.length; i++) {
    if (signs.includes(sum[i])) {
      if (signs.includes(sum[i]) && signs.includes(sum[i - 1])) {
        return "400: Bad request";
      }
      separates.push(nums.join(""));
      separates.push(sum[i]);
      nums = [];
    } else if (!signs.includes(sum[i])) {
      if (allowed.includes(sum[i])) {
        nums.push(sum[i]);
      } else {
        return "400: Bad request";
      }
      if (i === sum.length - 1) {
        separates.push(nums.join(""));
      }
    }
  }
  console.log(separates);
  while (separates.includes("$")) {
    let pro: number =
      Number(separates[separates.indexOf("$") - 1]) /
      Number(separates[separates.indexOf("$") + 1]);
    separates.splice(separates.indexOf("$") - 1, 3, pro.toString());
  }
  console.log(separates);

  while (separates.includes("*")) {
    let pro: number =
      Number(separates[separates.indexOf("*") - 1]) *
      Number(separates[separates.indexOf("*") + 1]);
    separates.splice(separates.indexOf("*") - 1, 3, pro.toString());
  }
  console.log(separates);
  while (separates.includes("-")) {
    let pro: number =
      Number(separates[separates.indexOf("-") - 1]) -
      Number(separates[separates.indexOf("-") + 1]);
    separates.splice(separates.indexOf("-") - 1, 3, pro.toString());
  }
  console.log(separates);

  while (separates.includes("+")) {
    let pro: number =
      Number(separates[separates.indexOf("+") - 1]) +
      Number(separates[separates.indexOf("+") + 1]);
    separates.splice(separates.indexOf("+") - 1, 3, pro.toString());
  }

  console.log(separates);

  return separates.length != 1 ? "400: Bad request" : Number(separates[0]);
};

console.log(calculate("1*1*1*1*1*1$1$1$1$1+1-1+9-1"));

const devide = (str: string): number =>
  str
    .split("$")
    .map(Number)
    .reduce((t, n) => t / n);
const multiply = (str: string): number =>
  str
    .split("*")
    .map(devide)
    .reduce((t, n) => t * n);
const minus = (str: string): number =>
  str
    .split("-")
    .map(multiply)
    .reduce((t, n) => t - n);
const plus = (str: string): number =>
  str
    .split("+")
    .map(minus)
    .reduce((t, n) => t + n);

export const calculate1 = (sum: string): number | string => {
  const res = plus(sum);

  return Number.isNaN(res) ? "400: Bad request" : res;
};
