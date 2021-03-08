/*
goal - create a new custom set data type (implemented through a class) that has several unique elements

rules:
assume the unique elements of a set may be manipulated,
assume that all elms of the set are numbers
when a set is first created it has no elements
a set can be given new elements, a set that is given an existing element does not change the set
(they must be unqique)
a set can report if it has an element
can have features such as subset, unions, differences, disjoints, intersections
a set can be created by passing in an array to the Set class, or to make an empty set nothing at all
values in a set can be stored in any order, all vallues must be unique, all values are numbers

data structure - internally, i will use the array data structure for easy manipulaton

constructor
  input -  array data type with numbers or nothing
  assign the input array (with non unique values removed) to the property set
  if there is nothing (no array) set the property set to be an empty array
  (each instance object will be an obj with access to the set property)
contains(val)
  determine if the val exists in the set property
    if it does return true
  otherwise,
    return false
subset(anotherSet)
  input - another CustomSet instance 
  if the input set and the current set are both empty
    return true
  if the input set is not empty and the current set is empty
    return true
  if the input set is empty and the current set is not
    return false
  iterate through the values of the current set
    if each value is also in the input set
      return true (the current set is a subset of the input)
  otherwise,
    return false
disjoint(anotherSet)
  if either sets are empty
    return true
  iterate through all values in the current set
    if it exists in the input
      return false
  iterate though all the values in the input set
    if it exists in the current
      return false
  otherwise, they must be disjoint return true
isSame(anotherSet) 
  if one of the sets are empty and the other is not
    return false (cannot be the same)
  if both sets are empty 
    return true
  iterate through the current set
    if the value is not in the input
      return false (not matching, not same)
  iterate through the input set
    if the value is not in the current set
      return false
  return false
isEmpty()
  determine if the set property on the instance object has any length
    if it does, return that length
  otherwise,
    return zero
add(element)
  determine if the element. currently exists in the set
    if it does, do nothing
  otherwise,
    reassign the set property to the current set plus the new element
intersection(anotherSet)
  declare a variable called newArr and init to an empty array
  determine which set is shorter bettwen the current set and input set store this in a variable
  iterate from zero until the value of the shorter set's length
    if the current value in the shorter set exists in the other set
      add the value to newArr
    otherwise,
      do nothing
  return a new set instance with the newArr passed in
difference(anotherSet)
  declare a variable called newArr and init to an empty array
  if either sets are empty
    return an empty set
  iterate through the values of the current set 
    if the value does not exist in the the input set
      add that value to newArr
    otherwise,
      do nothing
  return a set instance with newArr passed in
union
  determine if both sets are empty
    return an empty set
  determine if either set is empty
    return the non empty set
  otherwise
    iterate through the input set
      at each iteration add the value to the current set
    return the current set
*/

class CustomSet{
  constructor(array){
    this.set = array ? this._makeUnique(array) : [];
  }
  isEmpty(){
    return this.set.length === 0;
  }
  contains(val) {
    return this.set.includes(val);
  }
  add(val) {
    if (!this.contains(val)) {
      this.set = [...this.set,val];
    }
    return this;
  }
  isSame(otherSet) {
    let curr = this.set;
    if (this.isEmpty() && otherSet.isEmpty()) {
      return true;
    } else if (this.isEmpty() || otherSet.isEmpty()) {
      return false;
    } 
    for (let index = 0; index < curr.length; index ++) {
      if (!otherSet.contains(curr[index])) {
        return false;
      }
    }
    for (let index = 0; index < otherSet.set.length; index ++) {
      if (!this.contains(otherSet.set[index])) {
        return false;
      }
    }
    return true;
  }
  isSubset(otherSet){
    let curr = this.set;
    if (this.isEmpty() && otherSet.isEmpty()) {
      return true;
    } else if (this.isEmpty() && !otherSet.isEmpty()){
      return true;
    } else if (!this.isEmpty() && otherSet.isEmpty()) {
      return false;
    } 
    for (let index = 0 ; index < curr.length; index++) {
      if (!otherSet.contains(curr[index])) {
        return false;
      }
    }
    return true;
  }
  difference(otherSet) {
    let diff = this.set.filter((val) => !otherSet.contains(val));
    return new CustomSet(diff);
  }
  isDisjoint(otherSet){
    return this.set.every((val) => !otherSet.contains(val));
  }
  intersection(otherSet) {
    let curr = this.set;
    /*
    declare a variable called newArr and init to an empty array
    determine which set is shorter bettwen the current set and input set store this in a variable
    iterate from zero until the value of the shorter set's length
      if the current value in the shorter set exists in the other set
        add the value to newArr
      otherwise,
        do nothing
    return a new set instance with the newArr passed in
    */
    let shortest = Math.min(curr.length, otherSet.set.length);
    if (shortest === curr.length) {
      let arr = curr.filter(val => otherSet.contains(val));
      return new CustomSet(arr);
    } else {
      let arr = otherSet.set.filter(val => this.contains(val));
      return new CustomSet(arr);
    }
  }
  union(otherSet) {
    let joined = new CustomSet(this.set);
    otherSet.set.forEach((val) => joined.add(val));
    return joined;

  }
  _makeUnique(arr){
    return arr.sort().map((val,ind) => {
      if (arr[ind] !== arr[ind + 1]) {
        return val; // only accept last "repeating" value
      }
    }) 
  }
}


module.exports = CustomSet;