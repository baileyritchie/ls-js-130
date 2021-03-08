/*
input - number that we want to calculate the category of
output - string, either perfect, abundant or deficient (these are the only categories)

rules:
if given a negative number, or a non numeric input, throw an error
all other numbers must fall into one of three categories

create a "PerfectNumber" class, where our solution exissts in the
static classify method of the class

our static method accepts an input

data structure: store the positive, evenly divisible divisors in an array,
  in order to better manipulate the data

algorithm: 

classify static function
  determine if the type of the input is not a number or if the number is negative
    if true, throw an error
  declare a variable called divisors and init to an empty array
  iterate from 1 (via a varaiable called index) through the current input number passed in (number to test)
    if isDivisible returns true when passed index and the input number
      add the divisible number to the divisors array
  declare a variable called result and init to the total sum of the values in the divisor array
  if result is greater than the input number
    return the string abundant
  if it is less than the input number
    return the string deficient
  otherwise return the string perfect


isDivisible static function
  accepts two numbers, (first is the divisor in question) and the number to test
  determine if the second argument divided by the first has a remainer of zero
    if so, return true
  otherwise,
    return false
*/

class PerfectNumber{
  static classify(num){
    let result = [];
    if (typeof num !== 'number' || num < 1) {
      throw new Error('Not a valid number');
    }
    
    for (let index = 1; index < num; index ++) {
      if (PerfectNumber._isDivisible(index,num)) {
        result.push(index);
      }
    }
    result = result.reduce((curr,acc) => curr + acc, 0)
    if (result > num) return 'abundant';
    else if (result < num) return 'deficient';
    return 'perfect';
  }

  static _isDivisible(divisor,num) {
    return num % divisor === 0;
  }
}


module.exports = PerfectNumber;