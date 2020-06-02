// using express framework
const express = require('express');

// creating an express app
let app = express();

// In Express, the route definition has the structure app.METHOD(PATH, HANDLER) where:
    // - app is an instance of express
    // - METHOD is an HTTP request method, in lowercase
    // - PATH is a path on the server
    // - HANDLER is the (middleware) function executed when the route is matched (funtion takes the args 1. request object (req), 2. response object (res), and 3. the next middleware function if necessary (next))
// as this is a simple GET request handler, no next() function is required
app.get('/', function(req, res){
    // Express can discern the content type itself (and the status?), so there is no need to specify a header
    res.send('this is the homepage');
});





// app.listen() binds and listens for connections on the specified host and port
// This method is identical to Node’s http.Server.listen()
app.listen(3000);
