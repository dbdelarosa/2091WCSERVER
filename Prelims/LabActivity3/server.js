var http = require('http');

var server = http.createServer(function (req, res) {
if (req.url == '/root') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(
'<html><h1>This is Home Page.</h1><body><p>Hello! My name is dennis Dela Rosa of WD - 201</p></body></html>'
);
res.end();
} else if (req.url == '/student') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(
'<html><h1>This is Student Page.</h1><body><p>Hello! My name is dennis Dela Rosa of WD - 201</p></body></html>'
);
res.end();
} else if (req.url == '/admin') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(
'<html><h1>This is Admin Page.</h1><body><p>Hello! My name is dennis Dela Rosa of WD - 201</p></body></html>'
);

} else if (req.url == '/about') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
  '<html><h1>This is About Page.</h1><body><p>This Activity will teach on how to deal with simple server and local modules in Node.js</p></body></html>'
  );

} else if (req.url == '/contact') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
  '<html><h1>This is Contact  Page.</h1><body><p>Dennis dela Rosa, if you want additional details about this activity go to this site http://www.tutorialsteacher.com n</p></body></html>'
  );

} else if (req.url == '/gallery') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(
  '<html><h1>This is Gallery Page.</h1><body><p></p></body></html>'
  );
res.end();
} else res.end('Invalid Request!');
});

server.listen(5000);
console.log('node.js web server at port 5000 is running...');