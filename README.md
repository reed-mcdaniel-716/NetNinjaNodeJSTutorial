# The Net Ninja Series on Node.js
- Our registries are built in React on the front-end, but I'm hoping this tutorial gives me more insight into NodeJS as a whole, so that I have a greater understanding of how our code works
    - This has also given me insight into how other frameworks we plan to use, namely Django, work as well
    - Also provides more hands-on experience working with routing and middleware for web servers
- Code repo for reference is on [GitHub](https://github.com/iamshaunjp/node-js-playlist) with videos on [The Net Ninja YouTube channel](https://www.youtube.com/watch?v=qSAze9b0wrY&list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp&index=11)

---
## 1. Introduction
- What is Node.js Actually?
    - A platform which allows us to run JS on a computer/server
        - This means that to run a JS app on a server, there is no longer a need for an additional server-side language like PHP, everything can be done in JS
    - Node.js allows us to read, delete, and update files, in addition to being able to easily communicate with databases, among other things
- Pros of Node.js:
    - Uses JS
    - Very fast (runs on the V8 engine & uses non-blocking code)
    - Huge ecosystem of open-source packages (npm)
    - Great for real-time services (like chats)

---
## 2. Installing Node JS
- Set up dev environment (new Atom package for in IDE terminal)

---
## 3. The V8 Engine
- Computers do not inherently understand JS code
- A JS engine is needed to compile source code to machine-readable code, and for that code to then be executed
    - levels of abstraction: JS > C++ > Assembly Language > Machine Code
    - Node JS is written in C++ because it uses the V8 JS engine developed by Google in C++
    - The V8 engine is the heart of Node.js, and it is what converts JS into machine code
- For more on V8, check out their [website](https://opensource.google/projects/v8)
    - V8 can be run standalone, or be embedded into any C++ application
    - So Node.js is a C++ application in which V8 is embedded to convert JS code to machine code
        - JS was always intended to run in the browser, and not to deal with lower-level operations like what C++ is suited for
            - So the C++ code of Node.js hooks into the V8 engine and extends to JS some additional functionality, like being able to read a write files or connect to databases

---
## 4. The Global Object
- The global object is one which is available globally i.e. in any module of JS
- The global object when we write JS in the browser is the `window` object, defining the global scope, on which we can access properties and methods like `alert()`
- In Node.js, the global object is no longer the `window`, but is an object called `global`, and it is the global namespace object, defining the highest-level scope
    - an example is `console`, which can be used in the global namespace without having to first be required or imported

---
## 5. Function Expressions
- Looking under the hood a bit at functions and function expressions, where anonymous functions are assigned to variables
- Recall, we can also nest our functions

---
## 6. Modules and `require()`
- Modules are logical blocks of code that provide some separation and reusability in our applications
- `require()` is a globally accessible function
- modules, or specific functions and properties within a module, must be explicitly exported in order to access them outside of

---
## 7. Module Patterns
- Often times we want to export and import (require) more than just a single function as a part of a module

---
## 8. The Node Event Emitter
- the `events` module is a built-in Node.js module
- the event emitter allows us to generate custom events and then handle them accordingly
    - the same way there are `click` or `keyup` events emitted due to certain keyboard and mouse actions, we can define and emit our own custom events
- As an aside, "JavaScript is an object-based language based on prototypes, rather than being class-based" ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model))
    - "A prototype-based language, such as JavaScript, does not make this distinction [between classes and instances]: it simply has objects. A prototype-based language has the notion of a *prototypical object*, an object used as a template from which to get the initial properties for a new object. Any object can specify its own properties, either when you create it or at run time. In addition, any object can be associated as the *prototype* for another object, allowing the second object to share the first object's properties." ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model))
    - This is why *object constructors* exist
    - "JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax *does not* introduce a new object-oriented inheritance model to JavaScript." ([MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model))
        - Think about the "classes" we see in React, and how [they can be generated without the ES6 syntax](https://reactjs.org/docs/react-without-es6.html)

---
## 9. Reading and Writing Files
- `fs.readFileSync()` provides us with a *synchronous* method for reading files (`fs.readFile()` is the async version)
    - using this generates "blocking code" i.e. code after it will not be executed until the file is read
- Similarly, `fs.writeFileSync()` provides us with a *synchronous* method for writing files (`fs.writeFile()` is the async version)
- Use `fs.unlink()` to delete files
---
## 10. Creating / Removing Directories
- There are both synchronous and asynchronous methods for creating directories (`fs.mkdirSync()` and `fs.mkdir()`) and deleting directories (`fs.rmdirSync()` and `fs.rmdir()`)

---
## 11. Clients and Servers
- In most cases, our **client** will be our browser, which makes requests of a **server**, which will in turn return a response to the client
- This will happen after a **protocol** (rules for communication) is agreed upon for structuring the data sent between the client and server (HTTPS or FTP for example)
    - The different protocols are for different types of data (HTTP/S vs FTP) or level of security in transmitting that data (HTTPS vs HTTP)
- Each client and server is identifiable buy their unique IP addresses, and the connection between then is created via a **socket**
- TCP is the protocol for the sending of data down the socket, while a protocol like HTTP defines the structure of the data to be transmitted (HTTP is at the application level, TCP at the transport layer according to [Quora](https://www.quora.com/What-is-the-difference-between-HTTP-protocol-and-TCP-protocol))
- Data is transmitted across the socket in **packets**
- Node.js gives us the ability to open a connection between two computers, and send information between them
- A program running on a computer can listen for requests sent to a particular port number
    - Need to know what port Node.js is listening on in order to send it requests it can respond to

---
## 12. Creating a Server
- The `http` module is a core module shipped with Node.js that allows you to create a server
- Both **requests** from and client and **responses** from a server come with **data** and **headers** (metadata about the request or response)
- There are two types of reponse headers:
    1. Content-Type: clients (usually browsers) handle different types of data differently (JSON vs HTML)
    2. Status: indicating the level of success or failure of a request

---
## 13. Streams & Buffers
- Analogy: There is a large crystal candy mountain you want to take home to feed your family, but it's too big to move all at once, and it would take forever to do so. Instead, you set up a conveyor belt between the mountain and you house. You then chip away at it until you have a box full, and send that box on the conveyor belt to your house. This way, you family can start eating ASAP and you eventually transport all of the candy home.
- A **buffer** (box in analogy) is a temporary storage spot for a chunk of data that is being transferred from one place to another
    - the buffer is filled with data, then passed along
    - transfer of small chunks of data at a time
- A **stream** is the flow of/ pathway for data, from the large conglomerate to the buffers to the final destination
    - Think about streaming and buffering for watching videos online, you can begin consuming content before all data is transferred
- In Node.js we can create streams to transfer data (read and write files for example), and improve the performance of our applications
---

## 14. Readable Streams
- Types of streams in Node.js:
    1. **Writable stream**: allow Node.js to write data *to* a stream
    2. **Readable stream**: allow Node.js to read data *from* a stream
    3. **Duplex stream**: can read and write to and from a stream

---
## 15. writable Streams
- Typically, we want to be able to write data to a stream so that it can be sent back to the client (browser) efficiently
- Using streams over reading and writing data in-full provides improved performance, and allows you to make use of parts of the data more immediately

---
## 16. Pipes
- Because reading and writing streams of data is such a common practice, Node.js provides up with **pipes** to direct read stream outputs to write streams as inputs
    - Don't need to manually listen on a read stream or write to a write stream

---
## 17. Serving HTML Pages
- Rather than serving plain text, we may want to instead serve HTML pages

---
## 18. Serving JSON Data
- JSON data must first be *serialized* to either a string or buffer stream before being served (more on data serialization [here](https://devopedia.org/data-serialization))
- You may wish to return JSON data for a front-end JS script to make use of
    - This makes the server, at a very low level, an API endpoint
    - you could handle routing s.t. different URL paths return different JSON data

---
## 19. Basic Routing
- Want to be able to specify specific URLs to gain access to different resources (webpages, JSON data, etc.) that our server can provide, while using the same IP address and port
- To do this, we can make use of the `req.url`, the attribute of the request object (called `req`) that contains the URL the requested by the client
- *Note: without a default route, your client will be left hanging with no response, so it is best to have a default `404` page option*

---
## 20. The Node Package Manager (npm)
- `npm` comes installed with Node.js, and is a collection of command line tools for installing and managing third-party packages (modules)
- `npm` can also be used to publish your own packages
- doesn't seem to work without `package.json`

---
## 21. The `package.json` File
- The `package.json` is for keeping track of all installed packages and dependencies for your project
- You can either create it manually, or use the Node.js command `npm init` and fill-in the requested information
- Typically you only share source code, and not dependent modules, with other developers
    - So to run you application they must know what packages and versions you have installed, and install and update their own packages accordingly
- Prior to version 5.0.0., you had to include the `-save` flag to indicate that the package should bee saved to the `package.json` file
    - *This is now done automatically*
- Given a pre-existing `package.json` file, you need only run `npm install` to install all of the dependencies listed in that file

---
## 22. Installing `Nodemon`
- From `npm` : *`nodemon` is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.*
    - *`nodemon` wraps your application, so you can pass all the arguments you would normally pass to your app*
- This way, if you have a server running and a browser open to see served resources, any changes to application files are reflected in the browser when you hit refresh
- Install locally using the command `npm install nodemon`
- To run, you need to use `npx` (more on that [here](https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/))
    - This is because: *With a local installation, `nodemon` will not be available in your system path. Instead, the local installation of `nodemon` can be run by calling it from within an `npm` script (such as `npm start`) or using `npx nodemon`.* (from `npm` documentation on `nodemon`)
- Now, to run your application use `npx nodemon app.js` or whatever the main script is according to your `package.json` file

---
## 23. Introduction to `Express`
- `Express` is a ***routing*** and ***middleware*** web framework that has minimal functionality of its own: An `Express` application is essentially a series of middleware function calls. ([docs](https://expressjs.com/en/guide/using-middleware.html))
- `Express` is a popular framework because:
    1. It provides an easy and flexible routing system
    2. It integrates with many templating engines
    3. It contains a middleware framework
- ***Routing*** refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on) (from Express [docs](http://expressjs.com/en/starter/basic-routing.html))
    - In `Express`, the route definition has the structure `app.METHOD(PATH, HANDLER)` where:
        - `app` is an instance of express
        - `METHOD` is an HTTP request method, in lowercase
        - `PATH` is a path on the server
        - `HANDLER` is the function executed when the route is matched
- ***Middleware functions*** are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`. ([docs](https://expressjs.com/en/guide/using-middleware.html))
- Middleware functions can perform the following tasks:
    - Execute any code
    - Make changes to the request and the response objects
    - End the request-response cycle
    - Call the next middleware function in the stack
- If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise, the request will be left hanging.

---
## 24. Route Parameters
- `Express` can handle both static (ex. `/contact`) and dynamic (ex. `/`) requests with the use of **route parameters**

---
## 25. Template Engines (Part 1)
- A ***template engine*** (also called a *view engine*) enables you to use static template files in your application. ([docs](https://expressjs.com/en/guide/using-template-engines.html))
- At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
- This approach makes it easier to design an HTML page.
- For this project, we will be making use of the [EJS template engine](https://ejs.co/)

---
## 26. Template Engines (Part 2)
- In addition to adding in dynamic data, you can also put JS control structures, like for loops, in view templates

---
## 27. Partial Views
- Partial views (templates) allow you to extract the elements common to many templates into their own file, and then include it in multiple templates
    - for example, the navigation bar and footer available on every page of your application

---
## 28. Serving Static Files (& Middleware)
- For static files in you application (ex. CSS files), you need to handle requests for these files just as you would any other (otherwise client will get 404 error because the resource cannot be found)
- ***Middleware*** (in server-side web application frameworks) can be thought of more broadly of any code that runs between the request and the response (see above for details related to `Express`)
    - *Note: this is just one type of middleware*
- `Express` provides us with a lot of in-built middleware, including middleware for handling requests for our static resources

---
## 29. Query Strings
- On the World Wide Web, a ***query string*** is a part of a uniform resource locator (URL) that assigns values to specified parameters ([Wikipedia](https://en.wikipedia.org/wiki/Query_string))
    - the parameters and values often make up a kind of key-value pair
    - ex. in `mysite.com/blog/new?page=2`, the website and path are `mysite.com/blog/new` onto which we add a `?` to denote the beginning of our query, and the the key-value pair `page=2`
    - If there is more than one condition, they are separated by an `&`
- Given a query string, you must be able to parse the request and pull out the data it contains

---
## 30. Handling `POST` Requests
- The `POST` method is used to submit an entity to the specified resource (in our case our server), often causing a change in state or side effects on the server.([MDB web docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
    - often used for submitting forms
- As `Express` doesn't have built-in form handling, you need to install some middleware packages for that (this tutorial uses `body-parser`)






---
