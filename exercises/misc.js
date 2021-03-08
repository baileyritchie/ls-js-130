// problem 1 - es6 rest problem
function sum(...values) {
  return values.reduce(function(a, b) {
    return a + b;
  });
}

sum(1, 4, 5, 6); // 16

// problem 2 - spread operator

function formatName(firstName, middleName, lastName) {
  return `${lastName}, ${firstName} ${middleName[0]}.`;
}

fullName = ['James', 'Tiberius', 'Kirk'];

console.log(formatName(...fullName));
// logs: Kirk, James T.
