// [11] - give you matrix 2D and return matrix in other replace ?

const matrix2D = (a, b) => {
  let arr = [];
  // creating two dimensional array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i] = [];
    }
  }
  // inserting elements to array
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr[i][j] = j;
    }
  }
  return arr;
};
console.log(matrix2D(2, 3));
