function moveZeros(arr) {
  let nonZeros = arr.filter((elt) => elt !== 0);
  let zeros = arr.filter((elt) => elt === 0);

  return [...nonZeros, ...zeros];
}
