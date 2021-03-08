/*
input - a number that represents the specified length of substrings within a string
output - an array, where the elements oof the array represent the consec
substrings possible forthe given number

rules:
-> create a Series class that accepts a single string (that represents digits) to 
eventually split up into substrings
- store the input string in a digits property 

slices instance method:
-> will throw an error when given an input number greater than the current value of the digits property
accepts a number to represent the # of digits that belong in each subarray
returns an array

data structure: 
store the input string (string to split up) in the digits property as a string,
 convert to array when splitting the string in slices method


algorithm:
  constructor:
    accepts an input string and stores value on the digits property
  
  _len:
    returns the length of the digits string
  slices:
    determine if the input number is longer than the length of digits
      if true, throw an error
    declare a variable called result and init to empty array
    declare a variable called index and init too zero
      iterate from index up until index is equal to the remainder of length 
      of the digits string divided by the input number
        create a copy of the digits string from that index to the substring length specified 
        and append it to result as an array (result will contain sub arrays)
    return result
*/

class Series {
  constructor(digits) {
    this.digits = digits;
  }
  len() {
    return this.digits.length;
  }
  slices(count) {
    if (count > this.len()) {
      throw new Error('String is not long enough');
    }
    let result = [];
    let lastPossInd = this.len() - count;
    for (let index = 0; index <= lastPossInd; index ++ ) {
      result.push(this.digits.slice(index,index + count).split('').map((elm) => Number(elm)));
    }
    return result;
  }
}

let series = new Series('01234');
console.log(series.slices(1));
module.exports = Series;