/*
Write a function named startCounting that logs a number to the console every second, 
starting with 1. Each output number should be one greater than the previous one.

*/
function startCounting() {
  let count = 0;
  let counterId = setInterval(function() {
    count += 1;
    console.log(count);
  }, 1000);

  return counterId;
}

function stopCounting(counterId) {
  clearInterval(counterId);
}

let counterId = startCounting();
// some time later
stopCounting(counterId);