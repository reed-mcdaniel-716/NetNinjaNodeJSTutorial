const http = require('http');
const fs = require('fs');

// ---------------- Part 1: stream basics -----------------------------
// creating a readable stream with args: 1. file (absolute path), and 2. options object with properties like encoding or highWaterMark for buffer size
// buffer size is in kilobytes, which traditionally refered to as 2^10 0r 1024 bytes (base 2 this is approximately 1000 bytes)
// dropped it to 1kb so that with encoding there were at least 2 chunks
let myReadSteam = fs.createReadStream(`${__dirname}/poem.txt`, {encoding: 'utf8', highWaterMark: (1 * 1024)});
// createReadStream inherits from the events module
// data event for whenever a chunk of data is received on the stream
// so read stream is reading the file, filling up a buffer, and when a buffer is full, sending that data on, firing the "data" event

// creating a writable stream
// must have a destination for the streamed data
let myWriteStream = fs.createWriteStream(`${__dirname}/poem_copy.txt`)

// implementing a pipe to take data from readable stream to writable stream
myReadSteam.pipe(myWriteStream);


/* manual read to write stream
myReadSteam.on('data', function(chunk){
    console.log('---new chunk received:---');
    // writable stream to send data elsewhere
    myWriteStream.write(chunk);
});
*/

// ---------------------- Part 2: server -----------------------------------------
// creating a server
// take a requestListener() function with two parameters: 1. a request object, and a 2. response object
// function fires whenever a request is made of the server
// req is an IncomingMessage object representing the request to the server
// res is ServerResponse object representing the writable stream back to the client
// help from: https://www.w3schools.com/nodejs/func_http_requestlistener.asp
let server = http.createServer(function(req, res){
    // req.url give the relative path of the requested URL on this server (without IP and port specified below)
    console.log(`request was made to: ${req.url}`);
    // creating response headers first
    // args are 1. status, 2. object with other metadata like Content-Type (text/plain, text/html, application/json, etc.)
    res.writeHead(200, {'Content-Type': 'application/json'});
    // -------------- read and write stream version ----------------------
    //let myReadSteam = fs.createReadStream(`${__dirname}/index.html`, {encoding: 'utf8', highWaterMark: (1 * 1024)});
    // piping read stream to res, which is a writable stream
    //myReadSteam.pipe(res);
    //-------------- data in-full version ---------------------------------
    // end response and send to browser with response body as the only arg
    let myObj = {
        name: 'Reed',
        faveColor: 'blue',
        age: 24
    };
    // end expects either a string or a buffer, so JSON data must first be serialized
    res.end(JSON.stringify(myObj));
});

// need to set server to listen on a specific port of a given IP adress
// listening on port 3000 of localhost
// regardless of the url specified after 127.0.0.1:3000, will get the same response because we havent added any additional routes
// so 127.0.0.1:3000/hey and 127.0.0.1:3000/hey-there and 127.0.0.1:3000 will all just return the same text
server.listen(3000, '127.0.0.1');
console.log('listening on port 3000 of localhost...');
