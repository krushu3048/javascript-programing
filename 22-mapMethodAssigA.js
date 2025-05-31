const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("====================================================================================================================================");

//  Add 10 into each element and log new array result
const addTen = arrayNumbers.map(value => value + 10);
console.log('Add 10:', addTen);

console.log("====================================================================================================================================");

//  Cube each array element and log new array
const cubeArray = arrayNumbers.map(value => value ** 3);
console.log('Cubed Values:', cubeArray);

console.log("====================================================================================================================================");

//  Add index value to its corresponding element and log new array
const addIndex = arrayNumbers.map((value, index) => value + index);
console.log('Value + Index:', addIndex);

console.log("====================================================================================================================================");
