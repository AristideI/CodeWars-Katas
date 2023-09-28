function comp(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  return arr2.every((elt) => {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] * arr1[i] === elt) {
        arr1.splice(i, 1);
        return true;
      }
    }
    console.log(elt);
    return false;
  });
}
