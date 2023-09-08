export function orderWeight(str: string): string {
  const obj: { [prop: string]: number } = {};
  str.split(" ").forEach((elt) => {
    obj[elt] = Number(elt.split("").reduce((a, b) => a + Number(b), 0));
  });

  console.log(obj);
  const pro = Object.entries(obj).sort(([, a], [, b]) => a - b);
  return pro.map((a) => a[0]).join(" ");
}

console.log(orderWeight("103 123 4444 99 2000"));
