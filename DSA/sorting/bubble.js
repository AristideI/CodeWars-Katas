function bubbleSort(arr) {
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// test
const arr = [5, 3, 8, 2, 1, 4];
bubbleSort(arr);
console.log(arr); // [1, 2, 3, 4, 5, 8]
console.log(bubbleSort([5, 3, 8, 2, 1])); // [1, 2, 3, 5, 8]
console.log(bubbleSort([5, 3, 8, 2])); // [2, 3, 5, 8]
console.log(bubbleSort([-6, 20, 8, -2, 4])); // [-6,-2,4,8,20]
