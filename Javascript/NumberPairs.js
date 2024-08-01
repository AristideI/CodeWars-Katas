function getLargerNumbers(a, b) {
  return a.map((elt, ind) => {
    if (elt > b[ind]) {
      return elt;
    } else {
      return b[ind];
    }
  });
}
