function octalToDecimal(numberString) {
  let octal = 0;
  let digits = numberString.length;
  for (let idx = 0; idx < digits; idx += 1) {
    octal += numberString[idx] * (8 ** (digits - idx - 1));
  }
  console.log(octal);
  return octal;
}

octalToDecimal('1');           // 1
octalToDecimal('10');          // 8
octalToDecimal('130');         // 88
octalToDecimal('17');          // 15
octalToDecimal('2047');        // 1063
octalToDecimal('011');         // 9