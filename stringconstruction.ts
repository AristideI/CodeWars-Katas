export function stringsConstruction(A: string, B: string): number {
  let counter = 0;
  let arr = B.split("");

  while (true) {
    for (let char of A) {
      if (arr.includes(char)) {
        arr.splice(arr.indexOf(char), 1);
      } else {
        // Return the count when you can no longer form the string A from arr
        return counter;
      }
    }
    counter++;
  }
}
