isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');       // false

function isBalanced(str) {
  let unmatchedLeft = 0;
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === '(') {
      unmatchedLeft += 1;
    } else if (str[idx] === ')') {
      if (unmatchedLeft === 0) {
        console.log(false);
        return false;
      } else {
        unmatchedLeft -= 1;
      }
    }
  }
  console.log(unmatchedLeft === 0);
  return unmatchedLeft === 0;
}