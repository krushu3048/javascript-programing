console.log("======== Function with no arguments and no return value ============");
function dayOfTheWeek(){
    console.log("Today is Thursday..."); 
}
dayOfTheWeek();
dayOfTheWeek();
dayOfTheWeek();

console.log("======== Function with arguments and no return value ============");

function addition(n1, n2, n3){
    var result = n1 + n2 + n3;
    console.log(result);
}
addition(60, 70, 40);
addition(10.40, 99.567, 34.678);



console.log("======== Function with arguments and no return value ============");
function square(){
var result = num*num;
return result;
}
var squareValue = square(15);
console. log("Square is: ",squareValue);

var returnValue = square(11);
console. log("Square is: ",returnValue);