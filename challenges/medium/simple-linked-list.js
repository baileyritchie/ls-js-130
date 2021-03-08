/*
create a singly linked list class, that has functions that
add to the linked list and has "elements" that store some data and a next field
that points to the next element in the list

create a singly linked list class that contains data (as numbers from 1 - 10)

create a function that reversed the ll and also converts it to an array


rules:
each element in the ll contains data 9number from 1-10) and a pointer variable 
that points to the next element
the element is it's own class that has a constructor function that accepts
the number(data)

the ll has a head (beginning of the ll) and a tail (the end), the tail element points to null
the ll may be empty (and have no elements)
the ll may be constructed from an array, where the elements of the array become the data value stored
in each ll element
the ll may be converted to an array wwhere the data values of the ll elements become the values in the new array
 (in order from head to tail)
new elements can be added (via push) to the ll (becomes the new head)
elements can be removed (via pop) which removes the current tail from the ll

data structure - ll will be constructed via 2 classes, 1 for ll and one for each element in the ll

algorithms:

Element:
constructor: (2 props)
  datum (number from 1 -10)
  next (ref to another element or defaults to null)
datum()
  returns the current value of the datum prop on the current instance
next()
  returns the current value of the next prop on the current instance
isTail()
  determine if the next value points to another element, 
    if so return false
  otherwise, return true

LinkedList:
  constructor()
    head (set to null be default)
  toArray()
    declare a variable called result and init to an empty array
      iterates through the elements of the ll (keep setting the next prop of each element to the next elm)
        (until the ll ends or the last elm points to null)
        at each iteration add the element's datum value to the result array
    return the result array
  fromArray(arr)
    declare a variable called ll that represents an empty ll 
    if the array is omitted
      iterate as if the value of the array is empty
    iterate through the values of the input array 
      at each iteration create a new element where the element accepts the value of the array at that instance
      push that element on to ll
    return the new linked list
  push(val)
    declare a variable called newElm and init to a new instance of the Element class, where the datum
    is the input value passed in
    if the linked list is empty
      set the head of the ll too be newElm
    otherwise,
      declare a variable called temp and init to the current head of the ll
      set the next prop on newElm to be temp
      set the head to be newElm
  pop()
    declare a variable called temp and init to the current head value in the ll
    set the curent head value to be the next value on temp
    return the datum value stored in temp
  size()
    declare a variable called size and init to zero
    iterate from the current ll head until the element of the ll points to null (the tail)
      at each iteration increment the size variable by 1
    return the value of the size variable
  isEmpty()
    determine if the size of the linked list is zero
      if so return true
    otherwise return false
  peek()
    return the datum property on the head element of the linkedlist
    (will return null if empty)
  reverse()
    declare a variable called newLL and init to an empty ll
    iterate through the current ll (current instance) until the tail of the ll is reached
      declare a variable called newElm and init to a new element instance where the input is the current
      datum value in the ll
      push that newElm value onto newLL
    return the newLL linked list
*/
class Element{
  constructor(datumVal,nextElm = null) {
    this.datumVal = datumVal;
    this.nextElm = nextElm;
  }
  datum(){
    return this.datumVal;
  }
  next(){
    return this.nextElm;
  }
  isTail(){
    return this.nextElm === null;
  }
}

class SimpleLinkedList{
  constructor(){
    this.headElm = null;
  }
  head(){
    return this.headElm;
  }
  toArray(){
    let result = [];
    let curr = this.head();
    while (curr !== null) {
      result.push(curr.datum());
      curr = curr.next();
    }
    return result;
  }
  static fromArray(array){
    array = array || [];

    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
    
  }
  push(val){
    let elm = new Element(val,this.head()); // points the next to curr head
    this.headElm = elm; // sets the head
  }
  pop() {
    let data = this.head().datum();
    let newHead = this.head().next()
    this.headElm = newHead;
    return data;
  }
  peek() {
    return this.head() ? this.head().datum() : null;
  }
  size(){
    let size = 0;
    let curr = this.head();
    while (curr) {
      size += 1;
      curr = curr.next();
    }
    return size;
  }
  isEmpty(){
    return this.size() === 0;
  }
  reverse() {
    let list = new SimpleLinkedList();

    let currentElem = this.head();
    while (currentElem !== null) {
      list.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return list;
  }
}


module.exports = {SimpleLinkedList, Element};