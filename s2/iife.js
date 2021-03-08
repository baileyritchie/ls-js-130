(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// problem 3 - solve  with an iife

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);
console.log(sum);


// problem 4 - turn into an iife
(function countdown(someNum) {
  while (someNum >= 0) {
    console.log(someNum);
    someNum-=1;
  }
})(7)

// problem 6



let bar = (function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2);
let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

