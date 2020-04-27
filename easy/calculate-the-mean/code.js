function mean(arr) {
  // this rounds off the value
  // return parseFloat(arr.reduce((result, item) => result+item, 0) / arr.length).toFixed(2);

  // not getting output as desired
  // result = parseFloat(arr.reduce((result, item) => result+item, 0) / arr.length).toString();
  // return parseFloat(result.substring(0, result.indexOf('.')+3))

  result = parseFloat(arr.reduce((result, item) => result+item, 0) / arr.length).toString();
  return parseFloat(result.substring(0, result.indexOf('.')+3)).toFixed(2)
}
console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3])); // 2.54
console.log(mean([2, 3, 2, 3])); // 2.50
console.log(mean([3, 3, 3, 3, 3])); // 3.00

module.exports = mean;
