var hours = 4;
var rate = 300;
var days = 6;
var gross = hours * rate * days;
var tax = gross * 0.1;
var sss = 1200;
var pag = 300;
var phil = 400;
var totaldeduction = sss + pag + phil + tax;
var net = gross - totaldeduction;

console.log('Netpay ' + gross);
console.log('Tax ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund : ' + pag);
console.log('PhilHealth: ' + phil);
console.log('Total Deductions: ' + totaldeduction);
console.log('The Net Salary is: ' + net);

module.exports = calc;

function tax(name) {
  return 'Hello' + name;
}
module.exports = greet;
