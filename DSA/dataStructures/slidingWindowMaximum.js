function maxSlidingWindow(arr, k) {
  const result = [];
  const q = [];

  for (let i = 0; i <= arr.length; i++) {
    if (q.length === k) {
      result.push(Math.max(...q));
      q.shift();
      q.push(arr[i]);
    } else {
      q.push(arr[i]);
    }
  }

  return result;
}

console.log(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
