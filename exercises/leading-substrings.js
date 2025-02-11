leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

function leadingSubstrings(str) {
  let substrings = [];
  str.split('').forEach((_, idx) => substrings.push(str.slice(0, idx + 1)));
  console.log(substrings);
  return substrings;
}