console.log(`===========================Reverse String=============================`);


function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        let char = str.charAt(i);
        if (char !== " ") {
            reversed += char;
        }
    }
    console.log(reversed);
}


let string1 = "Hard work always pays back";
let string2 = "Soon I will be Angular IT Champ";

reverseString(string1);  
reverseString(string2); 