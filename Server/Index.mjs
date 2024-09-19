

import { createServer } from 'node:http';

const PORT = 3000; //never want to use strings or magic numbers, just use a constant

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
// starts a simple http server locally on port 3000
server.listen(PORT, '127.0.0.1', () => {//server.listen means run the server
  console.log('Listening on 127.0.0.1:3000');//tells us the function starts once the server gets started up
});