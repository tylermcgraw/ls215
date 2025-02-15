/*
- Problem
  - Input: string
  - Output: object of percentages - strings!
  - Assumptions
    input string is a string of at least 1 character

- Test cases
*/
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
/*
- Data Structure
  - Object

- Algorithm
  - Use regex + match to find counts of lower, upper, and neither
  - Convert to percents
  - Add to object and return
*/

function letterPercentages(str) {
  let length = str.length;
  let lowercaseCount = str.match(/[a-z]/g);
  lowercaseCount = lowercaseCount ? lowercaseCount.length : 0;
  let uppercaseCount = str.match(/[A-Z]/g);
  uppercaseCount = uppercaseCount ? uppercaseCount.length : 0;
  let lowercase = toString(toPercent(lowercaseCount, length));
  let uppercase = toString(toPercent(uppercaseCount, length));
  let neither = toString(toPercent(length - lowercaseCount - uppercaseCount, length));
  return {
    lowercase,
    uppercase,
    neither
  };
}

function toPercent(num, total) {
  return Math.round(num / total * 10000) / 100
}

function toString(num) {
  num = String(num);
  let dotIndex = num.indexOf('.');
  if (dotIndex === -1) {
    return num + '.00';
  } else {
    let decimalLength = num.slice(dotIndex + 1).length;
    if (decimalLength === 1) {
      return num + '0';
    }
  }
  return num;
}