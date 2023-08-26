export function rgb(r: number, g: number, b: number): string {
    return [r,g,b].map(elt=>elt<=0?"00":elt>255?"FF":elt.toString(16).toUpperCase().padStart(2,"0")).join("")
  }