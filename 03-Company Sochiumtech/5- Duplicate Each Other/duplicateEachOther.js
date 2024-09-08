
// give string and return the most repeated letter behind each other
const duplicateEachOther = (str) => {
    let duplicate = [];
    let nonDuplicate = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1] === str[i]) {
        duplicate.push(str[i]);
      }
      if (str[i + 1] !== str[i]) {
        nonDuplicate.push(str[i]);
      }
    }
    let result = duplicate.concat(nonDuplicate);
    return result.sort();
  };
  
  console.log(duplicateEachOther("osooyssrr"));
  // ['o', 'o', 'o','r', 'r', 's','s', 's', 'y']
