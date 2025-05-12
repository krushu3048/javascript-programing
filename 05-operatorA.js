console.log("=================Operator Assignment============================");

function squareOfWordLength(word) {
var  length = word.length;
var result = length * length;
  console.log(`The word is "${word}", its length is ${length}, and its square is ${result}`);
}


squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");


var sentence = "I am MERN Stack Developer";
  var length = sentence.length;
  var words = sentence.split(" ");
  var totalWords = words.length;

  var division = length / totalWords;
  var multiplication = length * totalWords;

  console.log(`Sentence: "${sentence}"`);
  console.log(`Length of string: ${length}`);
  console.log(`Total number of words: ${totalWords}`);
  console.log(`Length divided by words: ${division}`);
  console.log(`Length multiplied by words: ${multiplication}`);
