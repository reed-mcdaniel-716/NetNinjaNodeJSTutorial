// server with some routing
const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req, res){
    // req.url gives the relative path of the requested URL on this server (without IP and port specified below)
    console.log(`request was made to: ${req.url}`);
    // simple routing using if-else statements
    if(req.url === '/home' || req.url === '/'){
        // header of status and Content-Type
        res.writeHead(200, {'Content-Type': 'text/html'});
        // read stream for index.html and pipe directly to res writable stream
        fs.createReadStream(`${__dirname}/index.html`).pipe(res);
    } else if(req.url === '/contact-us'){
        // header of status and Content-Type
        res.writeHead(200, {'Content-Type': 'text/html'});
        // read stream for contact.html and pipe directly to res writable stream
        fs.createReadStream(`${__dirname}/contact.html`).pipe(res);
    } else if(req.url === '/authors'){
        let authors = [
            {name: "Maya Angelou", work: "Still I Rise"},
            {name: "James Baldwin", work: "Giovanni's Room"}
        ];
        // header of status and Content-Type
        res.writeHead(200, {'Content-Type': 'application/json'});
        // send data as string
        res.end(JSON.stringify(authors));
    } else {
        // header of status and Content-Type
        // 404 for page no found
        res.writeHead(404, {'Content-Type': 'text/html'});
        // read stream for contact.html and pipe directly to res writable stream
        fs.createReadStream(`${__dirname}/404.html`).pipe(res);
    }
});

// need to set server to listen on a specific port of a given IP adress
// listening on port 3000 of localhost
server.listen(3000, '127.0.0.1');
console.log('listening on port 3000 of localhost...');
