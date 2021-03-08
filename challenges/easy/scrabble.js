/*
input - given a word (string) compute the scrabble score for the word
output - some number that reps the scrabble score of a given word

rules:
if not provided a type of string, return 0 (null or \t returns 0)
if no letters are provided (empty string) return 0
always returns a number type
each letter has an associated score (of at least one)
the points are case insensitive, awarded regardless of case

create a new scrabble object
constructor:
  create a property called word (which takes the word in question) and stores the string (UPPERCASE version)
static LETTER_SCORES property
score instance method:

data structure: store a strings for each score category 
  as the keys within the LETTER_SCORES and their points as values

algorithm:
declare a variable called score_Options and init to the LETTER_SCORES property converted into an array of keys
declare a variable called score and init to zero
determine if the input passed is not a number or is empty
  return zero
iterate through the letters of the word (this.word) in the constructor
  iterate through the score_Options array
    if the current letter exists in an elm of the score_Options array
      increment score by the score_Options matching value (number)
return score
*/

class Scrabble {
  constructor(word) {
    this.word = word;
  }
  score() {
    let score = 0;
    if ( typeof this.word !== 'string' || this.word.legth === 0) {
      return 0;
    }
    let options = Object.keys(Scrabble.POINTS);
    this.word.split("")
      .forEach((letter) => {
        options.forEach((matchStr) => {
          if (matchStr.includes(letter.toUpperCase())) {
            score += Scrabble.POINTS[matchStr];
          }
        })
      })
    return score;
  }
  static POINTS = {
    'AEIOULNRST': 1,
    'DG': 2,
    'BCMP': 3,
    'FHVWY': 4,
    'K': 5,
    'JX': 8,
    'QZ': 10,
  };
  static score(word) {
    return new Scrabble(word).score();
  }
}
let sample = new Scrabble('a');
console.log(sample.score());

module.exports = Scrabble;