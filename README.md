# The Net Ninja Series on Node.js
- Our registries are built in React, but I'm hoping this tutorial gives me more insight into NodeJS as a whole, so that we can write better and more secure applications
- Code repo for reference is on [GitHub](https://github.com/iamshaunjp/node-js-playlist)

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

---
## 10. Creating / Removing Directories










---
