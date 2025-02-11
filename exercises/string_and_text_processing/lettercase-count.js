letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(str) {
  let count = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  str.split('').forEach(char => {
    if (char.match(/[A-Z]/)) {
      count.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      count.lowercase += 1;
    } else {
      count.neither += 1;
    }
  });
  console.log(count);
  return count;
}