function wordCount(word) {
  let counts = {};
  word.split('').forEach(char => {
    if (counts[char]) counts[char] += 1;
    else counts[char] = 1;
  });
  return counts;
}

function isAnagram(word1, word2) {
  let word1Counts = wordCount(word1);
  let word2Counts = wordCount(word2);
  let keys1 = Object.keys(word1Counts);
  let keys2 = Object.keys(word2Counts);
  if (keys1.length !== keys2.length) return false;
  for (key of keys1) {
    if (word1Counts[key] !== word2Counts[key]) return false;
  }
  return true;
}

function anagram(word, list) {
  return list.filter(element => isAnagram(element, word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]