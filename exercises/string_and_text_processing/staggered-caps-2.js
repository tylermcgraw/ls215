staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"

function staggeredCase(str) {
  let nextCap = true;
  let staggered = str.split('').map(char => {
    if (char.match(/[a-zA-Z]/)) {
      if (nextCap) {
        nextCap =  false;
        return char.toUpperCase();
      } else {
        nextCap = true;
        return char.toLowerCase();
      }
    }
    return char;
  }).join('');
  console.log(staggered);
  return staggered;
}