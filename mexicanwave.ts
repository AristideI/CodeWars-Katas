export function wave(str: string): Array<string> {
  const arr: string[] = [];
  str
    .toLowerCase()
    .split("")
    .forEach((elt, ind) => {
      if (elt === " ") {
      } else {
        arr.push(
          str.slice(0, ind) + str[ind].toUpperCase() + str.slice(ind + 1)
        );
      }
    });
  return arr;
}
