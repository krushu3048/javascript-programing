
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}
const yesBank = new Bank("Yes Bank", "Mumbai", "YESB0000123", "YB123");
const sbiBank = new Bank("SBI Bank", "Pune", "SBIN0000456", "SB456");
const mahBank = new Bank("Maharashtra Bank", "Raver", "MAHB0000789", "MB789");
const axisBank = new Bank("Axis Bank", "Jalgoan", "UTIB0000345", "AB345");

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`Bank Details is: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details is: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details is: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Bank Details is: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

console.log(`SBI Bank timings are: Open Time - ${sbiBank.openTime}, Close Time - ${sbiBank.closeTime}`);

console.log(`Axis Bank closes at ${axisBank.closeTime}, Bank Name - ${axisBank.bankName}`);

console.log(`Yes Bank Info: Name - ${yesBank.bankName}, Branch Code - ${yesBank.branchCode}, Opens at - ${yesBank.openTime}`);
