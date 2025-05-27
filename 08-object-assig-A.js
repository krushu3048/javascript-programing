console.log("=====Add the 5 Properties============");

let professor = {
    name : "Dr Krush Patil",
    age : 25,
    gender: "Male",
    department : "Computer Science",
    unversity : "NMU Unversity",

    degrees : {
          engineering : "CSC",
          PHD: "Adv Computing",
          Bachlor: "Bsc Computer",
          Master: "Master in computer Application",
          BTech: "AI"
    },
     certifiCates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming"
     ]
    }
professor.totalExperience = "14 years";
console.log(professor);
console.log(professor.degrees);
console.log(professor.certifiCates);

professor.name = "Dr.Tanish Patil";
console.log(professor);


professor.certifiCates.splice(2, 0, "Oracle Certified");
console.log(professor.certifiCates);

console.log("Last certificate:", professor.certifiCates[professor.certifiCates.length - 1]);

for (let key in professor) {
  console.log(`${key}:`, professor[key]);
}



