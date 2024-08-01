export function calc(expression: string): void {
  const all: any[] = expression.split("").filter((elt) => elt != " ");
  if (all.includes("/")) console.log(all);
}

console.log(calc("2 /2+3 * 4.75- -6"));
