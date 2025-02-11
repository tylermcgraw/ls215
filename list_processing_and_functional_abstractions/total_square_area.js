let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121
console.log(totalArea(rectangles));    // 141

function totalArea(rectangles) {
  return rectangles.reduce((acc, rect) => acc + rect[0] * rect[1], 0);
}

function totalSquareArea(rectangles) {
  return totalArea(
    rectangles.filter(rect => rect[0] === rect[1])
  );
}