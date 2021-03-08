/*
goal - need to create a SumOfMultiples class
accepts a set of numbers as its constructor, or nothing at all
to be able to find the sum of multiples

given a number, and a set of numbers
find all multiples of the numbers in the set that are less than the given number, 
and sum this, to return

to () -> main algo here

rules:
assume valid input number is given
assume that if no values are given for the set of numbers (no input to the constructor)
the input will be assumed to be all mltiples of 3/5 that are less than the given number

data structure - may require use of array data type to store the input multiples that need to be found
in order to better manipulate the data

constructor:
determine if there are input values
  if there are not store the values 3,5 in the mults property
otherwise, store any given input values within a prop called mults and inside an array

to (instance and static property):
declare a variable called totSum and init to zero
accepts a single num and has access to this.mults
  iterate through the numbers in this.mults
    add totSum to the value of passing the current multiple and the input num into getSummedMultiples
return totSum

getSummedMultiples(mult,num):
  declare a variable called sum and init to 0
  iterate from mult until num (increment in values of mult)
    if the mult is less than num
      add the value of mult to sum
  return sum
*/

class SumOfMultiples{
  constructor(...args) {
    this.mults = args.length > 0 ? args : [3,5]
  }
  to(num) {
    let addends = [];

    for (let curr = 1; curr < num; curr ++) {
      if (this.isMultiple(curr)) {
        addends.push(curr);
      }
    }
    return addends.reduce((acc,addend) => acc + addend, 0);
  }
  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }
  
  isMultiple(num) {
    return this.mults.some((multiple) => num % multiple === 0);
  }
}

let obj = new SumOfMultiples(4, 6);

console.log(obj.to(15));



module.exports = SumOfMultiples;