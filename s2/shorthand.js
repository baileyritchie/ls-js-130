// problem 1 - rewrite in classical js syntax
/*
function foo(bar, qux, baz) {
  return {
    bar,
    baz,
    qux,
  };
}
*/
function foo(bar,qux,baz) {
  return {
    bar:bar,
    quz:qux,
    baz:baz
  }
}

// problem 2
function foo() {
  return {
    bar: function() {
      console.log("bar");
    },
    qux: function(arg1) {
      console.log("qux");
      console.log(arg1);
    },
    baz: function(arg1, arg2) {
      console.log("baz");
      console.log(arg1);
      console.log(arg2);
    },
  };
}


function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = foo(one,two,three);
let baz = obj.baz;

/*

function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];

*/