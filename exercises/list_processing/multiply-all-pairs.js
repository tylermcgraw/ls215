multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

function multiplyAllPairs(list1, list2) {
  let pairs = [];
  list1.forEach(num1 => {
    list2.forEach(num2 => pairs.push(num1 * num2));
  });
  pairs.sort((a, b) => a - b);
  console.log(pairs);
  return pairs;
}