// problem 5
"use strict";

function makeMultipleLister(num) {
  return function() {
    for (let index = 1; index < 100; index++) {
      if ((num * index) > 99) {
        break;
      }
      console.log(num * index)
    }
  }
}

let lister = makeMultipleLister(17);
lister();

let total = 0;

function makeAdder() {
  return function add(num) {
    total += num;
  }
}
function makeSubtracter() {
  return function subtract(num) {
    total -= num;
  }
}
let add = makeAdder();
let subtract = makeSubtracter();

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10

console.log(total);

// problem 8
/*
const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
*/
function later(func,arg) {
  return function() {
    func(arg);
  }
}
function later2(func,arg) {
  return (arg2) => func(arg,arg2);
}
const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
shutdownWarning(30); // The system is shutting down in 30 minutes!


//problem 10

function bind(context,func) {
  return () => {
    func.call(context);
  }
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }

