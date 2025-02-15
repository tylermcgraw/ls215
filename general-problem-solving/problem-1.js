const BAD_NUMBER = '0000000000';

function cleanPhoneNumber(phoneNumber) {
  if (!phoneNumber) return BAD_NUMBER;
  let cleanedNumber = phoneNumber.replaceAll(/[^0-9]/g, '');
  let length = cleanedNumber.length;
  if (length === 10) {
    return cleanedNumber;
  } else if (length < 10 || length > 11) {
    return BAD_NUMBER;
  } else {
    if (cleanedNumber[0] === '1') {
      return cleanedNumber.slice(1);
    } else {
      return BAD_NUMBER;
    }
  }
  return cleanedNumber;
}

/*
- Problem
  - Input
    Phone number
    Type: string
  - Output
    Cleaned-up phone numbers
    Type: string
    Return string of 10 0s for bad number
    Return cleaned number for good number
  - Questions
    What is input? (string, array, multiple types, null)
    What is output? (same type just cleaned?)

- Test Cases
*/
console.log(cleanPhoneNumber()) // 0000000000
console.log(cleanPhoneNumber('123456789')) // 0000000000
console.log(cleanPhoneNumber('123456789a')) // 0000000000
console.log(cleanPhoneNumber('abcdefghij')) // 0000000000
console.log(cleanPhoneNumber('01234567890')) // 0000000000
console.log(cleanPhoneNumber('0123456789')) // 0123456789
console.log(cleanPhoneNumber('10123456789')) // 0123456789
console.log(cleanPhoneNumber('a0b1c234???56789')) // 0123456789
/*
- Data Structure
  - String

- Algorithm
  - Remove all non-digits (replace with '')
  - Check length of number
    - If length = 10, return number
    - Else if length < 10 or length > 11, return 10 0s
    - Else (length = 11)
      - If first digit = 1 return number (not including first digit)
      - Else return 10 0s
*/