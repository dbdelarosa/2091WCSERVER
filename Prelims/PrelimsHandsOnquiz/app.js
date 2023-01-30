var calc = require('./calculations');

var hours = 4;
var rate = 300;
var days = 6;

var tax = gross * 0.1;
var sss = 1200;
var pag = 300;
var phil = 400;
var totaldeduction = sss + pag + phil + tax;
var net = gross - totaldeduction;
var gross = hours * rate * days;
