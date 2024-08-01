function findNumber(start, stop, string) {
  let count = "";

  for (let i = start; i <= stop; i++) {
    count += i;
  }

  for (const char of string) {
    count = count.replace(char, "");
  }

  const result = [];

  for (let i = start; i <= stop; i++) {
    let current = i.toString();

    if (current.length !== count.length) {
      continue;
    }

    for (const char of count) {
      current = current.replace(char, "");
    }

    if (current === "") {
      result.push(i);
    }
  }

  return result;
}

console.log(findNumber(1, 10, "12345678910")); //, []
console.log(findNumber(1, 10, "2345678910")); //, [1]
console.log(findNumber(1, 10, "1234678910")); //, [5]
console.log(findNumber(1, 10, "123456789")); //, [10]
console.log(findNumber(1, 21, "1116122137143151617181920849510")); //, [12, 21]
