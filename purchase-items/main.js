/*
Notes on code comment instructions:
  <Class defintion>
  "variable definition"
  (function definition)
*/

// Class instances used in this page
const peopleDropdown = new Dropdown('people-dropdown');
const itemDropdown = new Dropdown('item-dropdown');
const peopleTable = new Table(`person-table`);

// Variable that contains all created persons
const allPeople = null;

// Helper function to get name from input element
const getNameInput = () => {
  return document.getElementById('name-input').value;
};

/*
  Part 1: Complete the buttton click handler (createPerson) below
    
  TODO:
    1) Create a new <Person> instance using the name typed in the input box
    2) Save the person to "allPeople" after defining a data structure for "allPeople"
    3) Add the person to "peopleDropdown" using the (addOption) function
    4) Add a new table row to "peopleTable" using the (addTableRow) function
 */
const createPerson = () => {
  /* CODE GOES HERE */
};

/*
  Part 2: Populate list of items into the items dropdown
  
  TODO:
    1) Populate "itemDropdown" based on the items defined in the "items" object above by using the (addOption) function
 */
const items = {
  id1: { name: 'chair', cost: 4, quantity: 3 },
  id2: { name: 'table', cost: 5, quantity: 3 },
  id3: { name: 'keyboard', cost: 3, quantity: 3 },
  id4: { name: 'mouse', cost: 2, quantity: 3 },
  id5: { name: 'backpack', cost: 1, quantity: 3 },
};
/* CODE GOES HERE */

/*
  Part 3: Complete the button click handler (purchaseItem) below

  TODO:
  1) Using the value returned from the "peopleDropdown" function (getCurrentSelection), get the selected person object
  2) Using the value returned from the "itemDropdown" function (getCurrentSelection), get the selected item object
  3) If no person or item has been selected, return and don't perform any action
  4) If the person does not have enough money in their walletBalance, return and don't perform any action
  5) Add the item name to the person's "purchased" array and deduct the cost of the item from the person's "walletBalance"
      If the walletBalance is 0, disable the person dropdown option using the "peopleDropdown" function (disableOption)
  6) Reduce the "quantity" of the item by 1 after it has been purchased
      If the item quantity is 0, disable the item dropdown option using the "itemDropdown" function (disableOption)
  7) Update the table row for the selected person with the new wallet balance and purchased item by using the "peopleTable" function (updatePersonRow)
 */
const purchase = () => {
  /* CODE GOES HERE */
};
