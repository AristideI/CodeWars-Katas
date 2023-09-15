function snail(matrix) {
  let result = [];

  while (matrix.length) {
    // Traverse the top row
    result = result.concat(matrix.shift());

    // Traverse the rightmost column
    for (let i = 0; i < matrix.length; i++) {
      result.push(matrix[i].pop());
    }

    // Check if there are any rows left after removing the top row
    if (matrix.length) {
      // Traverse the bottom row (from right to left)
      result = result.concat(matrix.pop().reverse());
    }

    // Traverse the leftmost column (from bottom to top)
    for (let i = matrix.length - 1; i >= 0; i--) {
      result.push(matrix[i].shift());
    }

    // Clean up any empty rows left after traversing the matrix
    matrix = matrix.filter((row) => row.length);
  }

  return result;
}

// Test cases
const array1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(snail(array1)); // [1,2,3,6,9,8,7,4,5]

const array2 = [
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5],
];
console.log(snail(array2)); // [1,2,3,4,5,6,7,8,9]
