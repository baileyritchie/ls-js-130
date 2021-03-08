/*
input - number that represents a certain time of day (value on a clock)
output - return some sort of clock object, that when translated can be compared to a normal clock

rules:
only use mathematical operations to determine the time
should be able to add or take time away from a certain clock object

constructor: will store an hour and minutes property here

at() -> main algorithm here, can be used as a static method, 
two parameters (hours and minutes), if minutes ommited it can be set to zero

toString() -> converts clock to human time

subtract() -> take time away

isEqual() -> compare two clock objects together

algorithm at():
returns a new clock object with hours and minutes set as properties

toString():
convert the hours and minutes property into a 
readable version with hours first followed by minutes

*/

class Clock{
  constructor(hours,minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  static at(hours,minutes = 0) {
    return new Clock(hours,minutes);
  }
  toString(){
    let hour = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
    let minute = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    return `${hour}:${minute}`;
  }
  add(mins){
    if (mins > 60) {
      this.hours = this.hours + Math.floor(mins/60); // TODO make sure to format after midnight time
      this.minutes = this.minutes + (mins % 60);
      this.flattenTime();
      return new Clock(this.hours,this.minutes);
    }
    this.minutes += mins;
    this.flattenTime();
    return new Clock(this.hours,this.minutes);
  }
  subtract(mins) {
    
    if (mins < 60) {
      this.minutes = this.minutes - mins;
      this.hours = Math.floor(this.hours - (mins/60));
      this.flattenTime();
      return new Clock(this.hours,this.minutes);
    } else {
      this.minutes = this.minutes - (mins % 60);
      this.hours = this.hours - Math.round(mins / 60);
      this.flattenTime();
      return new Clock(this.hours,this.minutes);
    }
  }

  flattenTime() {
    if (this.hours > 24) {
      this.hours = Math.floor(this.hours / 24);
    }
    if (this.hours < 0) {
      this.hours = Math.floor(24 + this.hours);
    }
    if (this.minutes >= 60) {
      this.hours = this.hours + Math.round(this.minutes/60);
      this.minutes = this.minutes % 60;
    }
    if (this.minutes < 0) {
      this.minutes = 60 + this.minutes;
    } 
  }
  isEqual(clock2) {
    if (this.hours === clock2.hours && this.minutes === clock2.minutes) {
      return true;
    } else return false;
  }
}
module.exports = Clock;