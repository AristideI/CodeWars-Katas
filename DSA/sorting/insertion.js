function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > num) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = num;
  }

  return arr;
}

console.log(insertion([5, 3, 8, 2, 1, 4])); // [1, 2, 3, 4, 5, 8]
console.log(insertion([5, 3, 8, 2, 1])); // [1, 2, 3, 5, 8]
console.log(insertion([5, 3, 8, 2])); // [2, 3, 5, 8]
console.log(insertion([-6, 20, 8, -2, 4])); // [-6,-2,4,8,20]
