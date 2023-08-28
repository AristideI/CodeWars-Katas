export function cleanString(s: string): string {
  let arr: string[] = s.split("");
  let ret: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "#") {
      ret.pop();
    } else {
      ret.push(arr[i]);
    }
  }

  return ret.join("");
}

console.log(cleanString("pro"));
