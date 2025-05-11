function stringHandsOn() {
    var inputStr = "   Hey you are doing good, keep it up    ";

    //  Print the string as it is on console
    console.log(`Given String is: "${inputStr}"`);

    //  Calculate length of the String
    var originalLength = inputStr.length;
    console.log(`Length of original string is: ${originalLength}`);
 
    //  Remove leading and trailing extra spaces and log with its length
    var trimmedStr = inputStr.trim();
    var trimmedLength = trimmedStr.length;
    console.log(`Trimmed String: "${trimmedStr}"`);
    console.log(`Length of trimmed string: ${trimmedLength}`);

    //  Print total number of extra spaces removed
    var extraSpaces = originalLength - trimmedLength;
    console.log(`Extra spaces removed: ${extraSpaces}`);

    //  Print first and last character of trimmed string
    console.log(`First character: "${trimmedStr[0]}", Last character: "${trimmedStr[trimmedStr.length - 1]}"`);

    //  Print the count of total words
    var words = trimmedStr.split(" ");
    var wordCount = words.filter(word => word !== "").length;
    console.log(`Total words in trimmed string: ${wordCount}`);

    //  Print the index of word "good"
    var indexGood = trimmedStr.indexOf("good");
    console.log(`Index of word "good": ${indexGood}`);

    //  Print the substring from index 22
    var subStrFrom22 = trimmedStr.substring(22);
    console.log(`Substring from index 22: "${subStrFrom22}"`);

    // Check if string ends with "up"
    var endsWithUp = trimmedStr.endsWith("up");
    console.log(`Does string end with "up"?: ${endsWithUp}`);

    //  Check if string starts with "Hey"
    var startsWithHey = trimmedStr.startsWith("Hey");
    console.log(`Does string start with "Hey"?: ${startsWithHey}`);
}

// Invoke the function
stringHandsOn();
