
let bill = Number(prompt("Enter bill amount:"));
let tipPercent = Number(prompt("Enter tip percentage:"));

let tip = bill * tipPercent / 100;
let total = bill;
total += tip;

console.log("Subtotal: $" + bill);
console.log("Tip Percentage: " + tipPercent + "%");
console.log("Calculated Tip: $" + tip);
console.log("Total Amount to Pay: $" + total);