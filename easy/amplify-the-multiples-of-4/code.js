function amplify(num) {
  return [...Array(num).keys()].map(item => ++item % 4 !== 0 ? item : item*10);
}

console.log(amplify(4)); // [ 1, 2, 3, 40 ]
console.log(amplify(3)); // [ 1, 2, 3 ]
console.log(amplify(25)); // [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

module.exports = amplify;
