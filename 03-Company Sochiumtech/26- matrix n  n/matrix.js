// [24] matrix n*n all of it ( 0 ) except 1 spot is (1) write a function to calculate how many moves to transfer the (1) to the middle ( consider all the matrixes is odd number)

const num = 5;
const constructIdentity = (num = 1) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    if (!res[i]) {
      res[i] = [];
    }
    for (let j = 0; j < num; j++) {
      if (i === j) {
        res[i][j] = 1;
      } else {
        res[i][j] = 0;
      }
    }
  }
  return res;
};
console.log(constructIdentity(num));