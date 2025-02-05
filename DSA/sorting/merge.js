function merge(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...merge(left), pivot, ...merge(right)];
}

console.log(merge([5, 3, 8, 2, 1, 50])); // [1, 2, 3, 4, 5, 8]
console.log(merge([5, 3, 8, 2, 1])); // [1, 2, 3, 5, 8]
console.log(merge([5, 3, 8, 2])); // [2, 3, 5, 8]
console.log(merge([-6, 20, 8, -2, 4])); // [-6,-2,4,8,20]
