function topThreeWords(text) {
  text = text.toLowerCase();
  console.log("real", text);
  text = text.split(/[^A-Za-z']+/);

  if (text.length === 0) return [];
  console.log("split", text);

  let counter = {};

  text.forEach((elt) => {
    if (elt !== "'" && elt !== "") {
      if (counter.hasOwnProperty(elt)) {
        counter[elt]++;
      } else {
        counter[elt] = 1;
      }
    }
  });

  console.log(counter);
  return Object.entries(counter)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map((elt) => elt[0]);
}
