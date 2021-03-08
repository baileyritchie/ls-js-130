/* easy challenges for js 130 */

/* problem 1 - triangles

input - three numbers that represent the length of the sides of a triangle
output - a string that represents the type of triangle (or no triangle at all),
isoceles,equilateral,scalene or not a triangle

rules:
in order to be a triangle all sides must be greater than zero
equilateral triangles have the same length on all sides
isoceles triangles have the same length for 2 sides
scalene are all diff lengths
also, sum of lengths of any 2 sides must be greater than or equal to the side of the other
assume always passed in 3 valid integers

data structure - inputting three numbers as input, possible add them to an array of all sides,
end up returning a string with the correct type or no type at all

algorithm:
findTriangle()
declare a variable called sides and init to an array of all three sides (data passed in)
determine if the sides array forms a triangle by calling isTriangle
  if not, return the string not a triangle

determine if every side of the array is equal to the first
  return the string equilateral
determine if one other side is equal to another
  return the string isoceles
otherwise 
  return the string scalene

isTriangle()
determine if the array passed in has any value that is 0 or < 0
  if so return false (not a triangle)
declare a var called arrCopy and init to the input array copied, and sorted in ascending order
  if the sum of the first two values of the array is not greater than or equal to the last value
    return false (not a triangle)
otherwise return true
*/

class Triangle {
  constructor(side1,side2,side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (!this.isTriangle()) {
      throw new Error("Invalid triangle lengths");
    }
  }
  kind() {
    let sides = [this.side1,this.side2,this.side3];
    if (sides.every(((side) => side === this.side1))) {
      return 'equilateral';
    } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
      return 'isosceles';
    } else return 'scalene';
  }
  isTriangle() {
    let sArr = [this.side1,this.side2,this.side3];
    if (sArr.some((val) => val <= 0)) {
      return false;
    } 
    let sorted = sArr.slice().sort((a,b) => a - b);
    if (sorted[0] + sorted[1] < sorted[2]) {
      return false;
    }
    return true;
  }
}

module.exports = Triangle;