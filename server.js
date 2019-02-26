// import smth from smth
const http = require('http');
const app = require('./app');
// Port where the project sould run. env const or hardcode port.
const port = process.env.port || 3000;
console.log('server runing at port : ', port);
// Create server and store in the variable Server.
// Arguments : listener(function that executed when we get a new request).
const server = http.createServer(app);
//Strat the server
// arguments : port.
server.listen(port);