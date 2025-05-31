const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log("===================================================================================================================================");

//  Numbers greater than 50
const greaterThan50 = arrayNumbers.filter(value => value > 50);
console.log('Numbers > 50:', greaterThan50);
console.log("===================================================================================================================================");
//  All even numbers
const evenNumbers = arrayNumbers.filter(value => value % 2 === 0);
console.log('Even Numbers:', evenNumbers);
console.log("===================================================================================================================================");
//  All odd numbers
const oddNumbers = arrayNumbers.filter(value => value % 2 !== 0);
console.log('Odd Numbers:', oddNumbers);
console.log("===================================================================================================================================");
//  Numbers that are multiples of 5
const multiplesOfFive = arrayNumbers.filter(value => value % 5 === 0);
console.log('Multiples of 5:', multiplesOfFive);
console.log("===================================================================================================================================");
//  Numbers between 20 and 50
const between20and50 = arrayNumbers.filter(value => value >= 20 && value <= 50);
console.log('Numbers between 20 and 50:', between20and50);

console.log("===================================================================================================================================");