"use strict";
let greet;
greet = () => {
    console.log('Hello World');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, 'ram');
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
console.log(result);
