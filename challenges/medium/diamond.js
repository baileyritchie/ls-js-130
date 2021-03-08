/*
input - some letter of the alphabet (string)
output - a console.log pattern thatt repressents a diamond (made up of strings)

rules:
the first and last rows always contain a single A
all rows begin and end with the same letter
the width and height of the diamond is the same
top letters are in ascending order
bottom letters are in descending
each line in the diamond ends with \n

A => "" 0 spaces
B => " " 1 space

from examples:
-> need to create a diamond class
-> diamond class has a static method called makeDiamond that is where our algorithm goes

constructor function:
nothing needed for the constructor function

makeDiamond function:
where the main algorithm goes, returns a series of strings that make up the diamond

algorithm:
declare a variable called pos and init to the matching number that corresponds to the letter passed in
iterate from 0 until pos is reached
  at each iteration log the result of calling makeRow with pos passed in and the length
iterate from pos - 1 back to zero
  at each iteration log the result of calling makeRow with pos passed in and the length


getLen()
returns the length (height of the triangle) based on the letters passed in

makeRow(pos,len):
determine if the position is zero (A)
  calculate the spacing needed for the current position
  declare a variable called rem and init to the length - spacing needed
  return the value of rem/2 + the spacing pattern + rem/2
determine if the position is one (B)
  calculate the spacing needed for the current position
  declare a variable called rem and init to the length - spacing needed
  return the value of rem/2 + the spacing pattern + rem/2
determine if the position is greater than one (C or above)
  calculate the spacing needed for the current position
  declare a variable called rem and init to the length - spacing needed
  return the value of rem/2 + the spacing pattern + rem/2

spacingNeeded(pos):
  accepts a number (0 representing A, 1 B... and so on)
  returns the number of spaces required
  A: ""
  B: " "
  all other letters: 3 + 2(pos after c)
getSpacingPattern():
  //prints the pattern itself
  A: ""
  B: "B B"
  all other letters: 3 + 2(pos after c)
*/
const LETTERS = 'ABCDEFGHIIJKLMNOPQRSTUVWXYZ'.split(""); // constant arr of letters

function spacingNeeded(pos) {
  return getSpacedPattern(pos).length;
}
function getSpacedPattern(pos) {
  if (pos === 0) {
    return "A";
  } else if (pos === 1) {
    return "B B";
  } else { // after C
    let spacing = 3 + (2) * (pos - 2);
    return LETTERS[pos] + " ".repeat(spacing) + LETTERS[pos];
  }
}

class Diamond {
  static makeDiamond(letter) {
    for (let index = 0; index <= LETTERS.indexOf(letter); index++) {
      // forwards
      return (Diamond.makeRow(index,Diamond.getLen(letter) ));
    }
    for (let index = (LETTERS.indexOf(letter) - 1); index >= 0; index--) {
      //backwards
      return (Diamond.makeRow(index,Diamond.getLen(letter) ));
    }
  }
  static getLen(letter) {
    return 2 * (LETTERS.indexOf(letter)) + 1;
  }

  static makeRow(pos,len) {
    let rem = len - spacingNeeded(pos);
    return " ".repeat(rem/2) + getSpacedPattern(pos) + " ".repeat(rem/2) + "\n";
  }
}

module.exports = Diamond;