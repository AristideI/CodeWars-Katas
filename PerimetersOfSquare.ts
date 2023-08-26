export const perimeter = (n:number):number => {
    if (n <= 1) return 4 * (n + 1);
      
      let a: number = 0, b: number = 1, temp: number, sum: number = 1; // sum starts at 1 because 0 (a) + 1 (b) = 1
      for (let i = 2; i <= n+1; i++) {
          temp = a + b;
          sum += temp;
          a = b;
          b = temp;
      }
      
      return 4 * sum;
  }