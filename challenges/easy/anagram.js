/*
problem -
input - a word (string) and a list of words (list of strings) that possibly contains an anagram
output - an array of words that are anagrams of the original word

rules:
- if there are no anagrams present in input array, return an empty array
- if there are more than one anagrams, return an array with multiple elements (multiple words)
- an identical word is not an anagram
- anagrams are case insensitive, capitalization does not matter

anagrams: 
- words of the same length
- have the exact same letters
- have the exact same number of letters

data structure- given a string, and an array, will convert string to array for easy manipulation

algorithm:
- create an Anagram class:
constructor function -> create an anagram property to hold the input string (type of String)

- create a match function on the anagram class that accepts an input of an array of possible anagrams
match()
declare a new variable called result and init to an empty array
iterate through the array and at each iteration run isAnagram()
  if true, add that element of the array to result
return result

isAnagram() 
declare a variable called mainWord and init to the value of the current word, 
  split into an array and sorted
declare a variable called possibleAnagram and init to the value of the string passed in, split
  into an array and sorted
return whether or not the value of mainWord turned into a string and possibleAnagram turned into a string are equivalentt
  (boolean)
*/

class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }
  match(options) {
    return options.filter((word) => this.isAnagram(word.toLowerCase()));
  }
  isAnagram(newWord) {
    if (newWord === this.word) {
      return false;
    }
    let sortedWord = this.word.split('').sort();
    let newSorted = newWord.split("").sort();
    return newSorted.join("") === sortedWord.join("");
  }

}

module.exports = Anagram;