function checksum(string) {
  return !!string && isValid(string.replace(/[\D]/gi, ''));
}

function isValid(string) {
  let sum = string.split('')
    .reverse()
    .map((num, idx) => {
      if (idx % 2 !== 0) {
        let doubled = num * 2;
        if (doubled > 9) {
          return doubled - 9;
        }
        return doubled;
      }
      return Number(num);
    }).reduce((acc, num) => acc + num);
  return sum % 10 === 0;
}

/*
- Problem
  - Input: number (as a STRING)
  - Output: validity (boolean?)
  - Questions
    Can input be empty? yes
    Can input have non-numbers? yes - clean it
    Ignore spaces? yes

- Test Cases
*/
console.log(checksum("2323 2005 7766 3554")); // true
console.log(checksum("8763"));                // true
console.log(checksum("1111"));                // false
console.log(checksum(""));                    // false
/*
- Data Structure


- Algorithm

*/