
// emulating the built in filter method
/*
let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]

function filter(arr,callback) {
  let result = [];
  for (let index = 0; index < arr.length; index ++) {
    if (callback(arr[index])) {
      result.push(arr[index]);
    }
  }
  return result;
}
*/
// emulating the built in map method
/*
let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function map(arr,callback) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    result.push(callback(arr[index]));
  }
  return result;
}
*/
// emulating the reduce method

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]

function reduce(arr,callback, initialValue) {
  let accum = initialValue;
  let index = 0;
  if (accum === undefined) {
    accum = arr[0];
    index =  1;
  }
  while (index < arr.length) {
    accum = callback(accum, arr[index]);
    index += 1;
  }
  return accum;
}

// emulating reduce that works on filter

function filter(array,callback) {
  return array.reduce((filteredItems,value) => {
    if (callback(value)) {
      filteredItems.push(value)
    }
    return filteredItems
  },[]);
}

// emulating reduce that works on map

function map(array,callback) {
  return array.reduce((transformedItems,value) => {
    transformedItems.push(callback(value));
    return transformedItems;
  },[]);
}
