const fruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log( fruits);


console.log("========Log the First Element========");
const fruitsAt3 = fruits[0];
console.log(fruitsAt3);

console.log("========Log the last Element========");
const fruitsAt4 = (fruits[fruits.length -1 ]);
console.log(fruitsAt4);

console.log("========Add the Element Papaya before Banana========");
fruits.unshift("Papaya");
console.log(fruits);

console.log("========Remove  Mango from the array========");
const index = fruits.indexOf("Mango");
if(index !== -1) {
  fruits.splice(index, 1);
}
console.log(fruits);

console.log("======Insert an Element Pineapple last Position=========");
fruits.push("Pineapple");
console.log(fruits);

console.log("=======Insert an element Dragon Fruit before ========");
const wmIndex = fruits.indexOf("Water Melon");
if (wmIndex !== -1) {
  fruits.splice(wmIndex, 0, "Dragon Fruit");
}
console.log(fruits);

console.log("=======Replace an element Orange with Kiwi ========");
fruits.splice(2,1,"Kiwi");
console.log(fruits);

console.log("=======Log the element Starting from index 1 to 4 ========");
const sliceFrom2 = fruits.slice(1,5);
console.log(sliceFrom2);


console.log("=======last 3 Element and log to console========");

console.log( fruits.slice(fruits.length - 3));



