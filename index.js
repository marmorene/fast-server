// Import the http module from Node.js
const http = require('http');

// The http.createServer() method turns your computer into an HTTP server.
// The function passed into the http.createServer() method, 
// will be executed when someone tries to access the computer on port 3000.
const server = http.createServer((req, res) => {
  // Write a response to the client
  res.end('Hello World!\n');
});

// The server object listens on port 3000
server.listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
