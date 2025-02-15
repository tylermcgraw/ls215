/*
- Problem
  - Input
    STRING - list of numbers in shorthand
  - Output
    ARRAY - complete list of numbers represented by the shorthand
  - Notes
    Shorthand is always valid?

- Test Cases
*/
// console.log(getList("1, 3, 7, 2, 4, 1")); // 1, 3, 7, 12, 14, 21
// console.log(getList("1:3"));              // 1, 2, 3
// console.log(getList("1-3, 1-2"));         // 1, 2, 3, 11, 12
// console.log(getList("1:5:2"));            // 1, 2, 3, 4, 5, 6, ... 12
// console.log(getList("104-2"));            // 104, 105, ... 112
// console.log(getList("104-02"));           // 104, 105, ... 202
// console.log(getList("545, 64:11"));       // 545, 564, ... 611
/*
- Data Structures
  ARRAY - list of numbers to be returned

- Algorithm
  Create array of numbers to be returned
  Remove spaces from input string (replace regex)
  Create array of numbers split by comma ","
    Create array of lists within each comma using .split(/(:|..|-)/)
    If array length === 1
      FunctionConvert(array[0])
    Else
      FunctionAdd(array)

  FunctionAdd - add numbers to list 
    - Input: (array - list of full nums) (array - list of shorthand nums to add)
    - Output: mutated array - list of full nums
    Loop starting at first number
      Convert shorthand number to full number
      If current ends with shorthand number
        Exit
      Else
        Add number to list

  FunctionConvert - convert shorthand number to actual
    If array length === 0 (first number)
      Add number to array
    Else
      Check number to matching digits of last number in array
        Eg. if number is 2 digits, compare to last 2 digits of last num in array
        If number is bigger, concatenate it with first digits and add it to the array
        Else, add 10^(# digits) and concatenate it + add to array

  Separators
  [","] = new number
  [":", "..", "-"] = list
*/

function getList(stringList) {
  let list = [];
  stringList = stringList.replace(/[\s]/g, '');
  stringList.split(',').forEach(item => {
    let numOrList = item.split(/(?::|\.\.|-)/);
    if (numOrList.length === 1) {
      list.push(shorthandNumberToFull(list, numOrList[0]));
    } else {
      shorthandListToFull(list, numOrList);
    }
  })
  return list;
}

// full list = ARRAY of NUMBERS, shorthand list = ARRAY of STRINGS
function shorthandListToFull(fullList, shorthandList) {
  for (let idx = 0; idx < shorthandList.length - 1; idx += 1) {
    let currentNum = shorthandNumberToFull(fullList, shorthandList[idx]);
    let endNum = shorthandNumberToFull(fullList.concat([currentNum]), shorthandList[idx + 1]);
    while (currentNum < endNum) {
      fullList.push(currentNum);
      currentNum += 1;
    }
    if (idx === shorthandList.length - 2) {
      fullList.push(currentNum);
    }
  }
}

// INPUT = ARRAY, STRING, OUTPUT = new NUMBER
function shorthandNumberToFull(list, stringNum) {
  let listLength = list.length;
  let newNum = Number(stringNum);
  if (listLength === 0) {
    return newNum
  } else {
    let lastNum = list[listLength - 1];
    let stringLastNum = String(lastNum);
    let lastNumDigits = stringLastNum.length;
    let newNumDigits = stringNum.length;
    let digitsDifference = lastNumDigits - newNumDigits;
    let fullNum = Number(stringLastNum.slice(0, digitsDifference) + stringNum);
    if (fullNum <= lastNum) {
      fullNum += 10 ** newNumDigits;
    }
    return fullNum;
  }
}