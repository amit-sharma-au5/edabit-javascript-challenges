function getAbsSum(arr) {
  return arr.reduce((result, item) => result + Math.abs(item), 0);
}

console.log(getAbsSum([2, -1, 4, 8, 10])); // 25
console.log(getAbsSum([-3, -4, -10, -2, -3])); // 22
console.log(getAbsSum([2, 4, 6, 8, 10])); // 30
console.log(getAbsSum([-1])); // 1

module.exports = getAbsSum;
