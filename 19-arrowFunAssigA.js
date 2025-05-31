console.log("===================================================================================================================================");

//  Arrow function with no arguments and no return value
const greet = () => {
  console.log("Good Morning, Today is Friday");
};
greet();
console.log("===================================================================================================================================");
//  Arrow function with 3 arguments, no return value, performing multiplication
const multiply = (a, b, c = 1) => {
  console.log(`Multiplication result: ${a * b * c}`);
};
multiply(5, 5, 2);     // 50
multiply(10, 4);       // 40, c defaults to 1
console.log("===================================================================================================================================");
//  Arrow function with 5 arguments and returns the sum
const addFiveNumbers = (a, b, c, d, e) => {
  return a + b + c + d + e;
};

let result1 = addFiveNumbers(100, 100, 200, 349, 756);
console.log(`Addition result of numbers: ${result1}`);

console.log("===================================================================================================================================");
let result2 = addFiveNumbers("I am ", "learning ", "ES6 ", "features", " in depth");
console.log(`Concatenated string result: ${result2}`);

console.log("===================================================================================================================================");
