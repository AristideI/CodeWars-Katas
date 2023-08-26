export function accum(s: string): string {
    return s.split("").map((elt,i)=>elt.toUpperCase() + elt.repeat(i).toLowerCase()).join("-")
  }
  