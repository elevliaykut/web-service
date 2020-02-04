const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000; //Nodejs will use use 3000 port
const server = http.createServer(app); // Create Server to listen port
server.listen(port);
