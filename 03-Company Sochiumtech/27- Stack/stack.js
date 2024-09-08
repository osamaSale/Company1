
//[31] if have a stack and using stak method return the second biggest value in stack
class Stack {
    constructor() {
      this.item = [];
    }
    maxSecond(item) {
      item.sort();
      let maxNumber = item[0];
      for (let i = 0; i < item.length; i++) {
        if (item[i] > maxNumber) {
          maxNumber = item[i - 1];
        }
      }
      return maxNumber;
    }
  }
  const stack = new Stack();
  console.log(stack.maxSecond([1, 2, 3, 4, 5, 6, 1, 3, 8])); //6
  