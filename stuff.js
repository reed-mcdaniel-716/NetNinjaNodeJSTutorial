let counter = function(arr) {
    return `There are ${arr.length} elements in this array`;
}

let adder = function(a, b){
    return `${a} + ${b} = ${a+b}`;
}

let pi = 3.14159
// module.exports is just an empty object that you can define
// could also be done inline
module.exports = {counter: counter, adder: adder, pi: pi};
