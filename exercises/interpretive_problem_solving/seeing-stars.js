/*
- Problem
  - Input
    n (size of grid of star)
  - Output
    8 sided star
  - Questions
    Input always a number?
    Input always positive/odd?
    Min = 7, max = ?
  - Observations
    Input always odd
    Middle row always filled with *s
    Other rows have 3 stars
- Tests
*/
star(7);
// logs
/*
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/
star(9);
// logs
/*
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/
/*
- Data Structure
  - Logging to console - array not needed?

- Algorithm
  - For loop n times
  - If n = (n-1)/2, fill with stars (middle row)
  - Otherwise, print line with 3 stars separated by spaces
    Ex.
    0 -> 0,2
    1 -> 1,1
    2 -> 2,0
    3 -> middle
    4 -> 2,0
    5 -> 1,1
    6 -> 0,2
  - Start/end spaces (padding) = 0,1,2,x,2,1,0 = middle - middleSpaces - 1
  - Middle spaces = 2,1,0,x,0,1,2 = Math.abs(middle - idx) - 1
*/

function star(n) {
  let middleRow = (n - 1) / 2;
  for (let row = 0; row < n; row += 1) {
    if (row === middleRow) {
      console.log('*'.repeat(n));
    } else {
      let spacesBetweenStars = Math.abs(middleRow - row) - 1;
      let padding = middleRow - spacesBetweenStars - 1;
      console.log(`${' '.repeat(padding)}*${' '.repeat(spacesBetweenStars)}*${' '.repeat(spacesBetweenStars)}*${' '.repeat(padding)}`)
    }
  }
}