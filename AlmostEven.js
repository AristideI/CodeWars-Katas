const splitInteger = (num, parts) => {
  const base = Math.floor(num / parts);
  let remainder = num % parts;
  const splitted = [];
  for (let i = 0; i < parts; i++) {
    splitted.push(base);
  }
  for (let i = 0; i < remainder; i++) {
    splitted[i]++;
  }

  return splitted.sort();
};

console.log(splitInteger(20, 6));
