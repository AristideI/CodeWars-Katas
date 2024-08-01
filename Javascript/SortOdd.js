function sortArray(array) {
  const odd = array.filter((elt) => elt % 2 !== 0).sort((a, b) => a - b);
  return array.map((elt) => {
    if (elt % 2 !== 0) {
      return odd.shift();
    } else {
      return elt;
    }
  });
}
