//  swap the value of two variable without declaration new variable
//  Switch between x and y values without temporary variables.
const newVariable = (a, b) => {
    return ([a, b] = [b, a]);
  };
  console.log(newVariable(1, 2));
  