console.log(`=============Check Even or Odd Number==============`);

var checkEvenOrOdd = function(num){
    if (num % 2==0) {
        return "EVEN"
    } else {
        return "ODD"
    }

}
var result = checkEvenOrOdd(45);
console.log(`The number 45 is : ${result}`);

var result = checkEvenOrOdd(70);
console.log(`The number 70 is : ${result}`);

var result = checkEvenOrOdd(67);
console.log(`The number 67 is : ${result}`);

var result = checkEvenOrOdd(98);
console.log(`The number 98 is : ${result}`);

console.log(`=============Check for Person Vote==============`);

var voteEligibility =function(age){
if (age>=18) {
    console.log(`The Eligible for vote ${age} `);
    
} else {
    console.log(`The Not Eligible for vote ${age}`);
    
}
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log(`=============check for string length==============`);

var checkStringLength = function(str) {
  if (str.length > 10) {
    console.log(`"${str}" has more than 10 characters`);
  } else {
    console.log(`"${str}" has 10 or fewer characters`);
  }
}
checkStringLength("JavaScript-ES6");

console.log(`=============check for string Start With java and Programing==============`);

const checkStartsWithJava = function(str) {
  if (str.startsWith("Java")) {
    console.log(`"${str}" starts with "Java"`);
  } else {
    console.log(`"${str}" does not start with "Java"`);
  }
};
checkStartsWithJava("JavaScript Language");


var checkStartsWithProgramming = function(str) {
  if (str.startsWith("Programming")) {
    console.log(`"${str}" starts with "Programming"`);
  } else {
    console.log(`"${str}" does not start with "Programming"`);
  }
}
checkStartsWithProgramming("Programming Language");

