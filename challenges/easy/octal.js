/*
input - 
output - 

*/

class Octal {
  constructor(str) {
    this.number = str;
  }
  toDecimal() {
    if (!this.validOctal()) {
      return 0;
    }
    let arrDigits = this.reversedDigits();

    let newNumber = 0;
    arrDigits.forEach((num,exponent) => {
      newNumber += (num * (8 ** exponent));
    })
    return newNumber;

  }
  reversedDigits(){
    return this.number.split('').map(digit => Number(digit)).reverse();
  }
  validOctal() {
    return this.number.split('').every(char => char.match(/[0-7]/));
  }
}

module.exports = Octal;