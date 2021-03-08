/* 1
Write a JavaScript function named delayLog that loops through the numbers from 1 to 10, 
and logs each number after that number of seconds. 
It should log 1 after 1 second, 2 after 2 seconds, and so on.

*/
function delayLog() {
  for (var time = 1; time <=10; time+=1) {
    let total = time * 1000;
    setTimeout(() => console.log(`${time} second later`), total);
  }
}

delayLog();

function afterNSeconds(callback,time) {
  setTimeout(callback,time * 1000);
}