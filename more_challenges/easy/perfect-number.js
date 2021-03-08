/*
goal - create a PerfectNumber class that belong to the categories of perfect, abundant, deficient
which are based on the aliquot number

classify static method :
input - a number
output - string that represents the type of number, perfect, abundant, deficient

rules for classify:
if no valid integer greater than 0 is provided, throw an error
otherwise, the result will return 1/3 strings in every case

data structure: not neccesary to have any data structures besides primitives

algorithm:

constructor:
none, nothing needs to be placed or used for instance objects

classify (main algo):
  determine if the input number is negative or not a number
    if so, throw an error
  declare a variable called sum and init to the _getAliquot function with the input number passed in
  determine if the sum is equal to the input number
    return the string perfect
  determine if the sum is less
    return the string deficient
  deteermine if the sum is greater
    return the string abundant

_getAliquot:
declare a variable called sum
iterate from 1 up to the current input number
  if the input number divided by the current number has no remainder (divides evenly)
    add the current number to the sum variable (considered to be a perfect divisor)
return the sum variable


*/

class PerfectNumber{
  static classify(num) {
    if (typeof num !== 'number' || num < 1) {
      throw new Error('Invalid Input');
    }
    let sum = PerfectNumber.getAliquot(num);
    if (sum === num) {
      return 'perfect';
    } else if (sum > num) {
      return 'abundant';
    } return 'deficient';
  }
  static getAliquot(num) {
    let sum = 0;
    for (let div = 1; div < num; div++) {
      if (num % div === 0) {
        sum += div;
      }
    }
    return sum;
  }
}

module.exports = PerfectNumber;