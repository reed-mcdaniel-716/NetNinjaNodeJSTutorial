// testing Node
// console is in the global namespace
console.log('hey there!');

// another global method
// call function after specified number of miliseconds
/*setTimeout(function() {
    console.log('3 seconds have passed');
}, 3000)*/

// and another global method
// call function every x miliseconds
/*let time = 0;
let timer = setInterval(function(){
    time += 2;
    console.log(`${time} seconds have passed`);
    if(time > 4){
        clearInterval(timer)
    }
}, 2000)*/

// Node can tell us what directory of file we are in
// not that due to the async nature of Node.js, the order of outputs many not be as expected
console.log(__dirname);
console.log(__filename);

// normal function statement
function sayHi(){
    console.log('hi');
}

sayHi();

// function expressions
let sayBye = function() {
    console.log('bye');
}

sayBye();

// nested functions
function callFunction(func) {
    func();
}

callFunction(sayBye);

// requiring our new module
const stuff = require('./stuff');
console.log(stuff.counter(['maya', 'morgan', 'pam']));

console.log(stuff.adder(3,4));

console.log(`pi is ${stuff.pi}`);

// events emitter
const events = require('events');

let myEmitter = new events.EventEmitter();

// adding a listener
myEmitter.on('someEvent', function(msg){
    console.log(msg);
});

// emitting an event
// first argument is the event, and after that are any other arguments the callback function takes
myEmitter.emit('someEvent', 'the event was emittd');

// util can be used to inherit certain properties from other objects
const util = require('util');

// object constructor, not a full class
let Person = function(name){
    this.name = name;
};

// first argument is what will be doing the inheeriting, and the second is what will be inherited
util.inherits(Person, events.EventEmitter)

let maya = new Person('maya');
let pam = new Person('pam');
let morgan = new Person('morgan');

let people = [maya, pam, morgan];

people.forEach((person) => {
    // attach custom event listener to each person
    person.on('speak', function(msg){
        console.log(`${person.name} says: ${msg}`);
    });
});

maya.emit('speak', 'I love this family!');
pam.emit('speak', 'I love my daughters!');
morgan.emit('speak', 'I love dance!');

// module for reading and writing files
const fs = require('fs');

// synchronous method for reading a file
// blocking code
// arguments are 1. filename relative to this file, 2. file encoding (don't want it to be read as binary)
let poem = fs.readFileSync('poem.txt', 'utf8');
console.log(`poem is: ${poem}`);

// writing to another file
// arguments are 1. the file to be written to and, 2. the data to be written
fs.writeFileSync('test_writeout.txt', poem);

// read asynchonously
// takes as arguments 1. file to read, 2. encoding, and 3. callback function that takes an error if one occurs and the returned data
fs.readFile('poem.txt', 'utf8', function(err, data){
    // on success (we're assuming no errors)
    // async write
    if(err){
        console.log(`async read error: ${err}`);
    } else {
        // takes as arguments 1. file to write to, 2. data to write, and 3. callback function that takes an error if one occurs and the returned data
        fs.writeFile('test_writeout.txt', data, function(err, data){
            if(err){
                console.log(`async write error: ${err}`);
            }
        });
    }
});

console.log('testing non-blocked code');

// to delete files (make sure file you're trying to delete exists first)
// setTimeout to wait
setTimeout(() => {fs.unlink('test_writeout.txt', (err) => {
    if(err){
        console.log(err);
    }
})}, 2000);

// making directory synchronously
fs.mkdirSync('stuff_dir_sync');
// deleting directory synchronously
// setTimeout to wait so you can see directory appear and then be deleted
setTimeout(() => {
    fs.rmdirSync('stuff_dir_sync');
}, 2000);

// setTimeout so that it happens afetr the above code
setTimeout(() => {
    // making directory asynchonously
    fs.mkdir('stuff_dir_async', (err) => {
        if(err){
            console.log(`async make directory error: ${err}`);
        } else {
            // reading file asynchonously
            fs.readFile('poem.txt', 'utf8', function(err, data){
                // on success (we're assuming no errors)
                if(err){
                    console.log(`async read error in new directory: ${err}`);
                } else {
                    // writing file asynchonously
                    fs.writeFile('./stuff_dir_async/test_writeout.txt', data, function(err){
                        if(err){
                            console.log(`async write error in new directory: ${err}`);
                        } else {
                            fs.unlink('./stuff_dir_async/test_writeout.txt', (err) => {
                                if(err){
                                    console.log(err);
                                }
                            });
                            // wait a few seconds then delete directory
                            setTimeout(() => {
                                fs.rmdir('stuff_dir_async', function(err){
                                    if(err){
                                        console.log(`async directory delete error: ${err}`);
                                    }
                                });
                            }, 2000);
                        }
                    });
                }
            });
        }
    });
}, 4000);

// stuff
