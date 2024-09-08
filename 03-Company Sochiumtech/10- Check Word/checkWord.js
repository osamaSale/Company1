// [12] give string and return yes or no beasd on is string contant on word (hello)
const checkWord = (str) => {
    if (str.toLocaleLowerCase() === "holle".toLocaleLowerCase()) {
      return true;
    } else {
      return false;
    }
  };
  console.log(checkWord("holle"));