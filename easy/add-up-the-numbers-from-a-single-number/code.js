function addUp(num) {
  // return [...Array(num).keys()].map(item => ++item).reduce((result, item) => result+item,0);
  return [...Array(num).keys()].map(item => ++item).reduce((result, item) => result+item, 0);
}

console.log(addUp(4)); // 10
console.log(addUp(13)); // 91
console.log(addUp(600)); // 180300

module.exports = addUp;
