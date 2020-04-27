function percentDiff(num1, num2) {
  // return parseFloat(100/((num1+num2)/2/Math.abs(num1-num2))).toFixed(1)
  return parseFloat(Math.abs(num2-num1)/((num1+num2)/2)*100).toFixed(1)
}

console.log(percentDiff(60, 100)); // 50.0
console.log(percentDiff(100, 60)); // 50.0
console.log(percentDiff(4538, 5439)); // 18.1
console.log(percentDiff(4538, 5439)); // 18.1

module.exports = percentDiff;
