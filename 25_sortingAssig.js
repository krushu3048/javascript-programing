const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log("==========Reverse the array===================");

const reversedArray = [...arrayRollNumbers].reverse();
console.log( reversedArray);

console.log("=============Use sort() without custom logic==========");

const defaultSortedArray = [...arrayRollNumbers].sort();
console.log( defaultSortedArray);

console.log("============ Sort in ascending order using custom logic=============");

const ascendingArray = [...arrayRollNumbers].sort((a, b) => a - b);
console.log( ascendingArray);

console.log("==========Find the greatest number============");

const maxNumber = Math.max(...arrayRollNumbers);
console.log( maxNumber);

console.log("========= Find the smallest number=============");

const minNumber = Math.min(...arrayRollNumbers);
console.log( minNumber);

console.log("========Remove duplicates==========");

const uniqueArray = [...new Set(arrayRollNumbers)];
console.log( uniqueArray);
