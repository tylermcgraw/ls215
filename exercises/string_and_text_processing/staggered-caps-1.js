staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

function staggeredCase(str) {
  let staggered = str.split('').map((char, idx) => {
    if (idx % 2 === 0) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  }).join('');
  console.log(staggered);
  return staggered;
}