/*
- Problem
  - Input
    * string
  - Output
    * new string
  - Questions
    * always receive 1 string? yes
    * can string be empty? yes - return empty string
    * ignore non-alphanumerics? can they be input? - yes, add as is

- Test Cases
*/
console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("") === ""); // true
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true

/*
- Data Structure
  - construct string - output
  - array - keep track of whether each char is alpha, digit, or neither?

- Algorithm
  - Return input string if its length < 2
  - Create empty string - to be returned, construct by adding chars
  - Create empty array - to be filled with alphas
  - Create empty array - to be filled with digits
  - Create empty array - to be filled with neithers
  - Iterate over string (convert to array)
    - If char is alpha, add first digit to new string (if no digits, add first alpha)
    - If char is digit, add first alpha (if no alphas, add first digit)
    - If neither, add first neither
*/

function swap(str) {
  let searched = str.split('');
  if (str.length < 2) return str;
  let swappedStr = '';
  str.split('').forEach((char, idx) => {
    if (char.match(/[a-z]/i)) {
      let digitIdx = searched.join('').search(/[0-9]/);
      if (digitIdx !== -1) {
        swappedStr += searched[digitIdx];
        searched[digitIdx] = ' ';
      } else {
        swappedStr += str[idx];
      }
    } else if (char.match(/[0-9]/)) {
      let alphaIdx = searched.join('').search(/[a-z]/);
      if (alphaIdx !== -1) {
        swappedStr += searched[alphaIdx];
        searched[alphaIdx] = ' ';
      } else {
        swappedStr += str[idx];
      }    
    } else {
      swappedStr += str[idx];
    }
  });
  return swappedStr;
}