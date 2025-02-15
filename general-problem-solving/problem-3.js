const BLOCKS = {
  B: 'O',
  O: 'B',
  G: 'T',
  T: 'G',
  V: 'I',
  I: 'V',
  X: 'K',
  K: 'X',
  R: 'E',
  E: 'R',
  L: 'Y',
  Y: 'L',
  D: 'Q',
  Q: 'D',
  F: 'S',
  S: 'F',
  Z: 'M',
  M: 'Z',
  C: 'P',
  P: 'C',
  J: 'W',
  W: 'J',
  N: 'A',
  A: 'N',
  H: 'U',
  U: 'H',
};

/*
- Problem
  - Input
    STRING - word
  - Output
    BOOLEAN - can word be spelled with blocks
  - Questions/notes
    Blocks may only be used once
    Blocks are case insensitive
    Input has to be string? no (return false)
    Input can be empty string? yes (return true)
    Input can contain non-alphabetic characters?

- Test Cases
*/
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));           // true
console.log(isBlockWord());             // false
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('123'));        // false
console.log(isBlockWord('je st'));      // false
console.log(isBlockWord('BOTCH'));      // false
/*
- Data Structure
  OBJECT - for blocks
  ARRAY - for used letters (blocks)

- Algorithm
  Check if input is a string (return false if not)
  Filter string (remove non alphabetic characters)
  Check if string is empty (return true if so)
  Convert string to uppercase
  Iterate over each character in string (regular for loop)
    Identify block needed to represent character
    If block has been used (letter in array)
      Return false
    Else
      Add block (2 letters) to array
  If we make it to the end of the string without any repeats, return true
*/

function isBlockWord(word) {
  if (typeof word !== 'string' || word.match(/[^a-zA-Z]/g)) {
    return false;
  }
  word = word.split('').map(char => char.toUpperCase()).join('');
  let seenChars = [];
  for (let idx = 0; idx < word.length; idx += 1) {
    let char = word[idx]
    if (seenChars.includes(char)) return false;
    seenChars.push(char, BLOCKS[char]);
  }
  return true;
}