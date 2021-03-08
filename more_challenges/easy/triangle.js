/*

goal - create a new triangle class, that produces triangle objects
with access to the kind() instance method
main algo -> in kind() method

creating an invalid triangle throws an error

rules
invalid triangle has any side with a zero length, and exists where the sum of any two sides is
not greater or equal to the last side, will throw an error if an invalid triangle is created with new keyword
isoceles - when 2 sides are the same
equilateral - all sides same
scalene - all sides different
assume that input will always be three valid number types

data structure - will store triangle sides as an array, to better manipulate data

algorithm:

constructor: 
  input - three numbers that represent sides
  if the three input parameters passed as an array, when passed into _isValid return true
    store the inputs as an array in a sides property
  otherwise,
    throw an error

_isValid(arr):
determine if any of value in the input array is zero or neg
  if so, return false
declare a variable called sorted and init to the input array sorted into ascending order
  if the first two values added together is not equal to or greater than the last
    return false
otherwise
  return true

kind():
  if every value in the sides property on the instanc object is the same
    return the string equilateral
  if every value in the sides property on the instance object is diff
    return scalene
  otherwise return isoceles
*/

class Triangle {
  constructor(side1,side2,side3) {
    if (!this._isValid([side1,side2,side3])) {
      throw new Error('Invalid Triangle');
    }
    this.sides = [side1,side2,side3];
  }
  _isValid(sides) {
    if (sides.some((val) => val <= 0)) {
      return false;
    }
    let sorted = sides.sort((a,b) => a - b);
    return sorted[0] + sorted[1] >= sorted[2];
  }
  kind(){
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return 'equilateral';
    } else if (this.sides[0] !== this.sides[1] && this.sides[0] !== this.sides[2] && this.sides[1] !== this.sides[2]) {
      return 'scalene';
    } return 'isosceles';
  }
}

module.exports = Triangle;