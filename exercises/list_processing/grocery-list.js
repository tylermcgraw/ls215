buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(list) {
  let fruits = [];
  list.forEach(fruitArr => {
    for (let idx = 0; idx < fruitArr[1]; idx += 1) {
      fruits.push(fruitArr[0]);
    }
  });
  console.log(fruits);
  return fruits;
}