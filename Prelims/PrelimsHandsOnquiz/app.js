var calcu = require('./calculations');

var rate = 300;
var hrs = 4;
var dw = 6;
var tax = 0.1;

var sss = 1200;
var pag_ibig = 300;
var phil = 400;

var grosss = calcu.mul(hrs, rate);
var grossss = calcu.mul(grosss, dw);
var taxx = calcu.mul(grossss, tax);
var deduc = calcu.add(taxx, sss);
var deducc = calcu.add(phil, pag_ibig);
var deduccc = calcu.add(deduc, deducc);
var net = calcu.sub(grossss, deduccc);

console.log('The Gross Income is: ' + grossss);
console.log('Tax: ' + taxx);
console.log('SSS: ' + sss);
console.log('Pag-ibig Fund: ' + pag_ibig);
console.log('PhilHealth: ' + phil);
console.log('Total Deduction: ' + deduccc);
console.log('The Net Salary is: ' + net);
