var calc = require('./calculations');

var hours = 4;
var rate = 300;
var days = 6;
var gross = hours * rate * days;
var sss = 1200;
var pag = 300;
var phil = 400;
var totaldeduction = sss + pag + phil + tax;
var net = gross - totaldeduction;

var tax = gross * 0.1;
