wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

function wordCap(str) {
  let words = str.split(' ');
  let cap = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  console.log(cap.join(' '));
  return cap.join(' ');
}