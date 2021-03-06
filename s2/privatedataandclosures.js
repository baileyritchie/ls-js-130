function makeCounterLogger (start) {
  return function(finish) {
    let number;
    if (start > finish) {
      for (number=start; number >= finish; number-=1) {
        console.log(number);
      }
    } else {
      for (number=start; number<=finish; number +=1) {
        console.log(number);
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

function makeList() {
  return {
    items: [],

    add: function (item) {
      let index = this.items.indexOf(item);
      if (index === -1) {
        this.items.push(item);
        console.log(item + " added!");
      }
    },

    list: function () {
      if (this.items.length === 0) {
        console.log("The list is empty.");
      } else {
        this.items.forEach(function(item) {
          console.log(item);
        });
      }
    },

    remove: function (item) {
      let index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(item + " removed!");
      }
    },
  };
}
let list = makeList();
list();
list("make breakfast");
list("read book");
list();
list("make breakfast");