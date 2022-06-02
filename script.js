//Skills practiced: function expression, return keyword, typeof operator, arithmetic operator, comparison operator, integers, floating point numbers, strings

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `You must provide two numbers`;
  } else if (typeof num2 !== "number") {
    return `Please provide two numbers`;
  }
  return num1 * num2;
};

console.log(multiply(34, 55));
console.log(multiply(-23, 87));
console.log(multiply(36));
console.log(multiply(101, 1005));
console.log(multiply("guess", "who"));
