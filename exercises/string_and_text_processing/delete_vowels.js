removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

function removeVowels(list) {
  console.log(list.map(str => str.replace(/[aeiou]/gi, '')));
  return list.map(str => str.replace(/[aeiou]/gi, ''));
}