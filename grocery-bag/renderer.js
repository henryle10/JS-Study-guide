// NO CHANGES NEED TO BE MADE TO THIS FILE

// This will visually output the results from the "packGroceries" function, along with display the data in the console
const allGroceryBags = packGroceries(groceryItems, 4);
console.log('Grocery Bags: ', allGroceryBags);
const groceriesWrapper = document.getElementById('groceries');
(allGroceryBags || []).forEach((bag, idx) => {
  const category = bag[0].type;
  const items = bag.map((item) => item.name).join(', ');
  groceriesWrapper.innerHTML += `<div class="row">
    <span class="label-text">Bag ${idx + 1} (${category}):</span>
    <span class="items-text">${items}</span>
  </div>`;
});
