function topThreeWords(text) {
  text = text.split(/[^A-Za-z']+/);
  let counter = {};
  text.forEach((elt) => {
    if (counter.hasOwnProperty(elt)) {
      counter[elt]++;
    } else {
      counter[elt] = 1;
    }
  });

  return Object.entries(counter)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map((elt) => elt[0]);
}

console.log()