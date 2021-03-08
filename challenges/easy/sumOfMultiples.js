/*
input- a single number and a set of numbers (numbers in an array)
output- a number that represents the sum of all numbers up to the input number where there are multiples 
of the set or of 3 or 5

** in the worst case the input number will be 1 for which there exists no multiples greater than 1 **
rules:
assuming to always accept a valid positive number in the "to" method
--> need to create a SumOfMultiples class (per the test file)
constructor:
accepts n numbers, which acts as the list of numbers (the multiples) that are summed, stored in an array
defaults to an array of 3,5 if no numbers provided
-creates a new object/instance

to: 
accepts a single number (number to sum up to)
returns a number that represents the sum of all numbers up to the input number where there are multiples 
of the set or of 3 or 5

data structure - the set of numbers will be converted into an array to better manipulate array data

algorithms:
constructor function:
  set any input values to be a property that contains the input values as elms of an array
  otherwise an array of [3,5]

to function:
  declare a variable called sum and init to zero
  iterates from 1 up to the input number
    iterate from the beginning of the multiples array to the end
      determine if the current number (at the curr iteration) 
      is equal to a multiple of the current number in the multiples array 
        add it to the current value of sum
  return the current value of sum

isMultiple:
- accepts two numbers (input number, number to see if multiple)
determime if the first number divided by the second has no remainder (it is a multiple)
  if it is, return true
return false

*/

class SumOfMultiples {
  constructor(...multiples) {
    this.multiples = (multiples.length > 0) ? multiples : [3, 5];
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }

  to(num) {
    let addends = [];

    for (let currentNum = 1; currentNum < num; currentNum++) {
      if (this.anyMultiple(currentNum)) {
        addends.push(currentNum);
      }
    }

    return addends.reduce((acc, addend) => acc + addend, 0);
  }

  anyMultiple(num) {
    return this.multiples.some(multiple => {
      return num % multiple === 0;
    });
  }
}

module.exports = SumOfMultiples;
