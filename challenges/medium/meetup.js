/*
input - a day of the week (string from Monday - Friday), the meeting descriptor (first, second, last ...etc)
otuput - return the exact day that corresponds to the input info (which also includes month and year)

rules:
the days of the week are given by the case insenstive strings from Monday through Friday
each constructed object represents a meetup date, the teenth is any day from monday through friday that ends in teenth
the 13th,14th,15th,16th,17th,18th,19th,

the fifth day of the month may not occur in every month, if it doesnt occur return null

constructor: 
accepts the month and year as params and stores them in month and year props

toString:
converts the date object to a human readable string representation

day: main algorithm placed here

data structure - working with date type, 
also manipulating/comparing array values for descriptor and days of the week,
will mostly work with array data type

algorithm:
declare a variable called available and init to an empty array

iterate throught the days of the month (using new Date object type)
  if the current day of the month matches the input day passed in (M-F days) add the date to the available array

if the input descriptor is the first
  return the first element of the date array
if second
  return the second element...
if 3rd...
  return the 3rd element
if 4th...
  return the 4th element
if fifth...
  return the fifth element or null if it doesn't exist
if last...
  return the last element in the array
if teenth
  return the element in the array where the date (numerical day of the month) corresponds to [13,19]
*/


class Meetup {
  constructor(year,month) {
    this.year = year;
    this.month = month;
  }
  static TEENTHS = [13,14,15,16,17,18,19];
  static DAYS_OF_WEEK = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  
  day(dayOfWeek,descrip) {
    dayOfWeek = dayOfWeek.toLowerCase(); // remove case sensitivity
    descrip = descrip.toLowerCase(); // remove case sensitivity
    let available = [];
    let lastDay = new Date(this.year, this.month , 0); // calculates the last day of the month
    for (let dayNum = 1; dayNum <= lastDay.getDate(); dayNum ++ ) {
      let date = new Date(this.year,this.month - 1,dayNum);
      if (date.getDay() === Meetup.DAYS_OF_WEEK.indexOf(dayOfWeek)) {
        available.push(date);
      }
    }
    return this._matchDescriptor(descrip,available);
    
  }
  _matchDescriptor(descrip,arr){
    switch(descrip) {
      case 'first':
        return arr[0];
      case 'second':
        return arr[1];
      case 'third':
        return arr[2];
      case 'fourth':
        return arr[3];
      case 'fifth':
        return arr[4] ? arr[4] : null;
      case 'last':
        return arr[arr.length - 1];
      case'teenth':
        return arr.find((date) => Meetup.TEENTHS.includes(date.getDate()));
      default:
        return null;
    }
  }
  
}


module.exports = Meetup;