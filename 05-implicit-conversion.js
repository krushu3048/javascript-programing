console.log("===================Implicit Conversion to String====================");

var result;
result = '3'+ 2;
console.log(`Given value is = "3" + 2 and  Result is : ${result} Reason: when you use the + operator with a string and a number, the number is automatically converted into a string, and string concatenation happens instead of arithmetic addition `);


var result;
result = '3'+ true;
console.log(`Given value is = "3" + true and  Result is : ${result} Reason:'3' is a string true is a boolean, but JavaScript automatically converts it to a string when combined with another string So '3' + true becomes '3' + 'true' → "3true"`);

var result;
result = '3'+ undefined;
console.log(`Given value is = "3" + undefined and  Result is : ${result} Reason:'3' is a string undefined is a special JavaScript value, but when used with + and a string, it gets converted to the string undefined So '3' + undefined → '3' + 'undefined' → "3undefined"`);

var result;
result = '3'+ null;
console.log(`Given value is = "3" + null and  Result is : ${result} Reason:'3' is a string null is a special value, but when used with + and a string, it gets converted to the string "null".So '3' + null → '3' + 'null' → "3null"`);

console.log("===================Implicit boolean conversion to Number====================");

var result;
result = '4' - true;
console.log(`Given value is = '4' - true and  Result is : ${result} Reason:The - operator in JavaScript only works with numbers, so JavaScript tries to convert both operands to numbers '4' (a string) becomes 4 true (a boolean) becomes 1`);



var result;
result = '4' +  true;
console.log(`Given value is = '4' +  true and  Result is ${result} Reason: + with a string triggers string concatenation:When the + operator is used and one operand is a string, JavaScript converts the other operand to a string and joins them true becomes "true":The boolean true is converted to the string "true"`);


var result;
result = '4' +  false;
console.log(`Given value is = '4' +  false and  Result is:  ${result} Reason:'4' is a string, JavaScript converts the other operand to a string false becomes "false" The boolean false is converted to the string "false".Concatenation happens:'4' + 'false' results in '4false'`);

console.log("===================Implicit  string  conversion to Number====================");

var result;
result = '4' - '2';
console.log(`Given value is = '4'-'2' and  Result is:  ${result} Reason: Unlike +, the - operator does not perform string concatenation Both '4' and '2' are numeric strings, so JavaScript automatically converts them to numbers:'4' → 4, '2' → 2 `);


 var result;
result = '4' -2;
console.log(`Given value is = '4' - 2 and  Result is:  ${result} Reason: - triggers numeric subtraction, not string concatenation JavaScript converts '4' (a string) to the number 4 automatically.Then it does the math: 4 - 2 = 2 `);




var result;
result = '4' * 2;
console.log(`Given value is = '4' * 2 and  Result is:  ${result} Reason:* is a mathematical operator, not used for strings JavaScript converts '4' (a string) to the number 4 It then multiplies: 4 * 2 = 8 `);


 var result;
result = '4' / 2;
console.log(`Given value is = '4' / 2 and  Result is:  ${result} Reason:/ is a mathematical operator, used for division JavaScript converts '4' (a string) to the number 4 automatically Then it performs division: 4 / 2 = 2`);


console.log("===================Undefined used with number, boolean or null given NAN====================");

var result;
result = 4 + undefined;
console.log(`Given value is = 4 + undefined and  Result is:  ${result} Reason:undefined is not a numberJavaScript cannot convert undefined into a valid number When using +, JavaScript tries to convert both operands to numbers (if not strings).4 is a number. undefined becomes NaN.Adding any number to NaN gives NaN:4 + NaN = NaN`);


var result;
result = 4 - undefined;
console.log(`Given value is =  4 - undefined and  Result is:  ${result} Reason:- is a mathematical operator, so JavaScript tries to convert both operands to numbers undefined cannot be converted to a valid number, so it becomes NaN Subtracting NaN from any number results in NaN:4 - NaN = NaN`);




var result;
result = true + undefined;
console.log(`Given value is = true + undefined and  Result is:  ${result} Reason:true is converted to 1 when used in arithmetic undefined cannot be converted to a valid number, so it becomes NaN Adding 1 + NaN results in NaN, because anything + NaN = NaN`);



var result;
result = null + undefined;
console.log(`Given value is = null + undefined and  Result is:  ${result} Reason: null converts to 0 in numeric operations undefined cannot be converted to a valid number, so it becomes NaN.0 + NaN results in NaN, because any arithmetic with NaN gives NaN`);    

