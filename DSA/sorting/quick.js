function quick(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const elt = arr[i];
    if (elt < pivot) {
      left.push(elt);
    } else {
      right.push(elt);
    }
  }

  return quick(left).concat(pivot, quick(right));
}

console.log(quick([5, 3, 8, 2, 1, 50])); // [1, 2, 3, 4, 5, 8]
console.log(quick([5, 3, 8, 2, 1])); // [1, 2, 3, 5, 8]
console.log(quick([5, 3, 8, 2])); // [2, 3, 5, 8]
console.log(quick([-6, 20, 8, -2, 4])); // [-6,-2,4,8,20]
