substrings('abcde');

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

function leadingSubstrings(str) {
  let substrings = [];
  str.split('').forEach((_, idx) => substrings.push(str.slice(0, idx + 1)));
  return substrings;
}

function substrings(str) {
  let allSubstrings = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    allSubstrings = allSubstrings.concat(leadingSubstrings(str.slice(idx, str.length)));
  }
  console.log(allSubstrings);
  return allSubstrings;
}