console.log("============================Ternary operator Assignment========================");

console.log("==================Find the greteast number using Ternary opreator==========================");


function greaterNumber(numOne,numTwo){
var result = numOne > numTwo ? numOne : numTwo;
console.log(`Greater Number is ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("====================To check Even and Odd Number==================");
function checkEvenOdd(num) {
  var result = num % 2 === 0 ? "Even" : "Odd";
  console.log(`Given Number is ${num} and This Number is: ${result}`);
}

checkEvenOdd(29);
checkEvenOdd(44);
checkEvenOdd(0);
checkEvenOdd(101);


console.log("=================Word Length Even Or Odd==========================");

function checkWordLength(word) {
  var length = word.length;
  var result = length % 2 === 0 ? "Even" : "Odd";
  console.log(`Total length  is "${word}" , Length is ${length} and it's: ${result}`);
}

checkWordLength("JavaScript");
checkWordLength("developer");
checkWordLength("Google");


console.log(4+true);
console.log(5-true);



