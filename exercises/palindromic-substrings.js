palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

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
  return allSubstrings;
}

function palindromes(str) {
  let palindromeSubstrings = substrings(str).filter(isPalindrome);
  console.log(palindromeSubstrings);
  return palindromeSubstrings;
}

function isPalindrome(str) {
  let len = str.length;
  if (len === 1) return false;
  for (let idx = 0; idx <= Math.ceil(len / 2); idx += 1) {
    if (str[idx] !== str[len - idx - 1]) return false;
  }
  return true;
}