/* items manager
create,update,delete, items( lists all), inStock (lists given availability), itemsInCategry (lists based on categories)
if info passed in is not correct, will produce a notValid prop with val of true
*/



/* reports manager 
init - accepts item manager object, assigns it to the items property
createReporter - accepts SKU, returns an object with the itemInfo method
reportsInStock - logs item names that are all in stock

*/
function ItemManager() {
  function _getSKU(name,category) {
    let first;
    let words = name.split(" ");
    words[0].length >= 3 ? first = words[0].slice(0,3) : first = words[0].slice(0,2) + words[1][0];
    return first + category.slice(0,2);
  }
  function _isValid(name,category,quantity) {
    if (name.length < 5) return false;
    
  }
  let totalItems = [];
  return {
    create(name,category,quantity) {
      totalItems.push({})
    },
    update(){

    },
    delete() {

    },
    items() {

    },
    inStock(){

    },
    itemsInCategry(){

    }
  }
}

