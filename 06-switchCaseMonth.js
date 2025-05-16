console.log("============Switch Case Month===============");

function monthOfYear(month) {

  switch (month)
   {
    case 1:
      console.log("January",month);
      break;
    case 2:
      console.log("February",month);
      break;
    case 3:
      console.log("March",month);
      break;
    case 4:
      console.log("April",month);
      break;
    case 5:
      console.log("May",month);
      break;
    case 6:
      console.log("June",month);
      break;
    case 7:
      console.log("July",month);
      break;
    case 8:
      console.log("August",month);
      break;
    case 9:
      console.log("September",month);
      break;
    case 10:
      console.log("October",month);
      break;
    case 11:
      console.log("November",month);
      break;
    case 12:
      console.log("December",month);
      break;
    default:
      console.log("Invalid month number:", month);
  }
}
monthOfYear(0);    
monthOfYear(2);   
monthOfYear(5);   
monthOfYear(12);  
monthOfYear(15);  
monthOfYear(100);  
