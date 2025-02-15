/*
- Problem
  - Input
    # of light switches, n
  - Output
    array of lights that are on after n rounds

- Test Cases
*/
lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
/*
- Data Structure
  - Array - return value

- Algorithm
1. List perfect squares from 1 to n
2.
  Create array of size n, set all values to 0 (off)
  Iterate n times
  For each iteration, toggle lights form 0 to 1 and 1 to 0
  After iterating, create a new array
    If original array has a 1, add index + 1 to new array
*/

function lightsOn(switches) {
  let arr = [];
  for (let idx = 1; idx <= Math.floor(Math.sqrt(switches)); idx += 1) {
    arr.push(idx ** 2);
  }
  console.log(arr);
  return arr;
}