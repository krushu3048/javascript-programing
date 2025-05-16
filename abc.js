console.log(`||-----------------String Hanson Assignment-----------------||`);

function stringHandsOn(){
    var string="  Hey you are doing good, keep it up   ";
    console.log(`Given String is:- ${string}`);
    var len=string.length;
    console.log(`Length of String is:- ${len}`);
    var trim=string.trim();
    console.log(`After Trimming :-${trim}`);
    var totalRemovedSpace=string.length-trim.length
    console.log(`Removed Space Count is:- ${totalRemovedSpace}`);
    var firstCharacter=trim.charAt(0);
    var lastCharacter=trim.charAt(trim.length-1)
    console.log(`First Character is:- ${firstCharacter} Last Character is:- ${lastCharacter}`);
    var splitWord=trim.split(" ");
    console.log(`Length of word is:- ${splitWord.length}`);
    var indexof=trim.indexOf("good");
    console.log(`Index of given word (good) is:- ${indexof}`);
    var substring=trim.substring(22);
    console.log(`Substring is:- ${substring}`);
    var startWord=trim.startsWith("Hey");
    console.log(`Starting word of string "Hey" is:- ${startWord}`);
    var endingWord=trim.endsWith("up");
    console.log(`Ending word of string "up" is:- ${endingWord}`);
    
    
    
}
stringHandsOn();