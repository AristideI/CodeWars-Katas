export class Vector {
  nums: number[];
  constructor(components: number[]) {
    this.nums = components;
  }

  add(a: Vector): Vector {
    if (a.nums.length != this.nums.length) {
      throw new Error("Vectors must have the same number of components.");
    }
    let addArr: number[] = this.nums.map((elt, ind) => elt + a.nums[ind]);
    return new Vector(addArr);
  }
  subtract(a: Vector): Vector {
    if (a.nums.length != this.nums.length) {
      throw new Error("Vectors must have the same number of components.");
    }
    let addArr: number[] = this.nums.map((elt, ind) => elt - a.nums[ind]);
    return new Vector(addArr);
  }
  dot(a: Vector): number {
    if (a.nums.length != this.nums.length) {
      throw new Error("Vectors must have the same number of components.");
    }
    let addArr: number = this.nums
      .map((elt, ind) => elt * a.nums[ind])
      .reduce((j, k) => j + k);
    return addArr;
  }

  norm() {
    let addArr: number = this.nums
      .map((elt) => elt * elt)
      .reduce((j, k) => j + k);
    return addArr ** 0.5;
  }

  toString(): string {
    return "(" + this.nums.join(",") + ")";
  }

  equals(a: Vector): boolean {
    if (a.nums.length !== this.nums.length) return false;
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] !== a.nums[i]) return false;
    }
    return true;
  }
}
