// using express framework
const express = require('express');
// using body-parser for parsing POST data
const bodyParser = require('body-parser');

// creating an express app
let app = express();
// setting view (template) engine
// default behavior is to look in the views/ directory
app.set('view engine', 'ejs');

// app.use() mounts the specified middleware function or functions at the specified path
// express.static() has 1 required arg: 1. root
    // the root argument specifies the root directory from which to serve static assets
    // The function determines the file to serve by combining req.url with the provided root directory
    // When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, allowing for stacking and fall-backs.
app.use('/assets', express.static('assets'));

/*-------------------------------- Routing --------------------------------------*/

// create application/x-www-form-urlencoded parser for POST data
let urlencodedParser = bodyParser.urlencoded({ extended: false })

// In Express, the route definition has the structure app.METHOD(PATH, HANDLER) where:
    // - app is an instance of express
    // - METHOD is an HTTP request method, in lowercase
    // - PATH is a path on the server
    // - HANDLER is the (middleware) function executed when the route is matched (function takes the args 1. request object (req), 2. response object (res), and 3. the next middleware function if necessary (next))
// as this is a simple GET request handler, no next() function is required
app.get('/', function(req, res){
    //-------------- Part 1: returning a static html ---------------------------
    // Express can discern the content type itself (and the status?), so there is no need to specify a header
    // serving up static HTML
    // res.sendFile(`${__dirname}/index.html`);
    //-------------- Part 2: returing an EJS template --------------------------
    // render() for rendering a view (i.e. template)
    // params are: 1. name of EJS file to serve, 2. object of data to fill in view template
    res.render(view = 'index');
});

app.get('/contact', function(req, res){
    //-------------- Part 1: returning a static html ---------------------------
    // res.sendFile(`${__dirname}/contact.html`);
    //-------------- Part 2: returing an EJS template -----------------------------
    // req.query accesses the key-value pairs of any query string in request (returns an object)
    res.render(view = 'contact', locals = {qs: req.query});
});

// app.get(), like any app.METHOD, can take a series of middleware functions after the path (applied in order)
app.post('/contact', urlencodedParser ,function(req, res){
    console.log(req.body);
    res.render(view = 'contact', locals = {qs: req.query});
});

// dynamic request where :{variable} is a placholder for a variable that will be provided by the client in a request
app.get('/author/:name', function(req, res){
    //-------------- Part 1: returning a dynamic string ---------------------------
    // req.params has all of the request parameters
    // res.send(`You requested to see the author profile for: ${req.params.name}`);
    //-------------- Part 2: returing an EJS template -----------------------------
    // a small dummy "database"
    let data = {name: "Maya Angelou", favoriteWork: "Still I Rise", favoriteWorkYear: "1978", birthPlace: "St. Louis, MO, USA", otherWorks: [{title: "I Know Why the Caged Bird Sings", year: "1969"}, {title: "Gather Together in My Name", year: "1974"}]}

    res.render(view = 'profile', locals = {author: req.params.name, data: data});
});

// app.listen() binds and listens for connections on the specified host and port
// This method is identical to Node’s http.Server.listen()
app.listen(3000);
