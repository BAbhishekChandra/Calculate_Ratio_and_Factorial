const ratioOfTwoNumbers = require("../ratio/index.js");
const factorialOfNumber = require("../factorial/index.js");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
//const call = ratioAndFactorial(4, 2, 5);
//console.log(call);
