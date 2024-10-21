function binary(arr, t) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] === t) {
      return mid;
    }
    if (t < arr[mid]) {
      rightIndex = mid - 1;
    } else {
      leftIndex = mid + 1;
    }
  }

  return -1;
}

function recursiveBinary(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === t) {
    return mid;
  }

  if (t < arr[mid]) {
    return search(arr, t, left, mid - 1);
  } else {
    return search(arr, t, mid + 1, right);
  }
}

console.log(recursiveBinary([-5, 2, 4, 6, 10], 6));
