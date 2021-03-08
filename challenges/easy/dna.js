/*

input - two strings that represent different dna strands
output - an int (greater than or equal to zero) representing the hamming distance

rules:
if passed two strings of different lengths, calc the hamming distance by truncating both 
strings to be the length of the shorter

assume - only string data type passed in, can also be given a string of length zero,
has to be valid dna points with capitlized and correct DNA values

test cases:
  - create a class with a constructor to represent dna
  - calculate the hamming distance within an instance method that operates on the dna
  - if an "empty" strand of dna is passed the hamming value is zero
  - if an unequal length of dna is passed compared to the comparison strand, truncate to 
  the shorter strand

data structure - iterate over strings -> ideally turn them into arrays

algorithm:

constructor :
create a dna property that contains the input string converted into an array of dna points

hammingDistance
- accepts a new or comparison dna "string" data type, and converts this into an array
declare a variable called hammingCount and init to zero

determine if one dna strand is shorted than another
  if it is, truncate the length of the other strand to match the shorter

declare a variable called index and iterate through index to the length of the dna strands
  if the value of the dna from one strand to the other is not the same
    increment the hammingCount
return the value of hammingCount
*/

class DNA {
  constructor(dnaString) {
    this.dna = dnaString.split("");
  }
  hammingDistance(comparedStr) {
    let otherDNA = comparedStr.split("");
    let hammingCount = 0;
    let tempDNA;
    if (otherDNA.length < this.dna.length) {
      tempDNA = this.dna.slice(0,otherDNA.length);
    } else if (otherDNA.length >= this.dna.length) {
      otherDNA = otherDNA.slice(0, this.dna.length);
      tempDNA = this.dna;
    }
    for (let index = 0; index < tempDNA.length; index++) {
      if (tempDNA[index] !== otherDNA[index]) {
        hammingCount += 1;
      }
    }
    return hammingCount;
  }
}


module.exports = DNA;