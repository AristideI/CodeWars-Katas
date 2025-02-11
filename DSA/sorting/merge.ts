function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...mergeSort(left), ...mergeSort(right)];
}

const arr = [5, 4, 20, -4, -5, -20, 53, 35, 3, 2, 1];
console.log(mergeSort(arr)); // [-20, -5, -4, 1, 2, 3, 4, 5, 20, 35, 53]
