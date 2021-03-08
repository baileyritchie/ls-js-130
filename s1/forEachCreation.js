
["a", "b", "c"].forEach(function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});

function forEach(arr,callback,thisArg) {
  for (let index = 0; index < arr.length; index+=1) {
    callback.call(thisArg,arr[index],index,arr);
  }

}