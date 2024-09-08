
// [7] Find the summation of each diagonal in a square matrix.
const diagonalSumMatrix = (matrix) => {
    var sumDiagonals = { main: 0, second: 0 },
      matrixLength = matrix.length;
  
    for (var i = 0; i < matrixLength; i++) {
      sumDiagonals.main += matrix[i][i];
      sumDiagonals.second += matrix[i][matrixLength - i - 1];
    }
    return sumDiagonals;
  };
  
console.log(
    diagonalSumMatrix([
      [1, 2, 3, 4],
      [4, 5, 6, 5],
      [7, 8, 9, 7],
      [7, 8, 9, 7],
    ])
  );

  // { main: 22, second: 25 }
  