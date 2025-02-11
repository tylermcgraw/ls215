isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

function isUppercase(str) {
  console.log(str.split('').every(char => char === char.toUpperCase()));
  return str.split('').every(char => char === char.toUpperCase());
}