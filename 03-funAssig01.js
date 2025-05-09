console.log("======== Function with no arguments and no return value ============");


function myFirstName() {
    console.log("First Name: Krushnal");
}

function myLastName() {
    console.log("Last Name: Patil");
}

myFirstName();
myLastName();
console.log("======== Personal Details Arguments ============");


function personalDetails(firstName, lastName, collegeName) {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("College Name:", collegeName);
}

personalDetails("Krushnal", "Patil", "G.H.Raisoni");


console.log("========Function With Three Parameter  ============");

function addThreeValue(val1, val2, val3) {
    console.log(val1 + val2 + val3);
}
addThreeValue(10.23, 600, 40);  
addThreeValue("Hello ", "Good ", "morning");  
