swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

function swapCase(str) {
  let swapped = str.split('').map(char => {
    if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    }
    return char.toLowerCase();
  }).join('');
  console.log(swapped);
  return swapped;
}