export class Kata {
    static squareDigits(num: number): number {
      return Number(num.toString().split("").map(elt=>Number(elt)**2).join(""))
    }
  }