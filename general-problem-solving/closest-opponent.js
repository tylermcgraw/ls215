/*
- Problem
  - Input
    * positions of opponents (array? empty? positions = integer?)
    * position of player (integer?)
  - Output
    * position of closest opponent (just their location - integer?)

- Test Cases
  see below

- Data Structure
  array - iterate over opponent positions (keys)

- Algorithm
  if empty object, return null
  loop over each opponent position
    if position is smallest, it becomes the new closest value

*/

function findClosestOpponent(positions, position) {
  if (Object.keys(positions).length === 0) return null;
  return Object.values(positions).reduce((acc, oppPos) => {
    let distance = Math.abs(position - oppPos);
    if (distance <= Math.abs(position - acc)) {
      return oppPos;
    } else {
      return acc;
    }
  }, Infinity);
}

// Test Cases
console.log(findClosestOpponent({}, 74)); // null

console.log(findClosestOpponent({
  "Opponent 1" : 1,
  "Opponent 2" : 15,
  "Opponent 3" : 37
}, 10)); // 15

console.log(findClosestOpponent({
  "Opponent 1a" : 1,
  "Opponent 1b" : 5
}, 3)); // 5

console.log(findClosestOpponent({
  "Opponent 1a" : 1, "Opponent 1b" : 5,
  "Opponent 1c" : 50, "Opponent 1d" : 100, "Opponent 1e" : null
}, 150)); // 100