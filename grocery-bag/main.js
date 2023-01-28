// Input
const groceryItems = [
    { type: 'fruit', name: 'watermelon' },
    { type: 'meat', name: 'beef' },
    { type: 'meat', name: 'chicken' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' },
    { type: 'fruit', name: 'pineapple' },
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'fruit', name: 'strawberry' },
    { type: 'vegetable', name: 'carrots' },
    { type: 'vegetable', name: 'cucumbers' },
  ];
  
  /*
   * Complete the function below
   *
   * @input groceryItems: Array<GroceryObject>
   * @input itemsPerBag: number >= 1
   * @output Array<Array<GroceryObject>>
   */
  const packGroceries = (groceryItems, itemsPerBag) => {
    let items = [];
    let results = [];
    groceryItems.sort((a, b) => {
      const nameA = a.type.toUpperCase(); // ignore upper and lowercase
      const nameB = b.type.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  
    let prevType = null;
    for (let i = 0; i < groceryItems.length; i++) {
      items.push(groceryItems[i]);
      if (items.length === itemsPerBag || items.type !== prevType) {
        results.push(items);
        items = [];
      }
      prevType = groceryItems[i].type;
    }
  };
  
  var result = groceryItems.reduce(function (map, obj) {
    map[obj.key] = obj.val;
    return map;
  }, {});
  
  console.log(packGroceries(groceryItems, 2));
  
  // sort through the objects
  // iterate through the objects and place the items into bags limited to the second param
  // If the grocery items surpasses the items per bag then we create a new array
  