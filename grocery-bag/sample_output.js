/*
Sample Input
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

"packGroceries(groceryItems, 3)"
Sample Output for "packGroceries" function with 3 items per bag
[
  [
    { type: 'fruit', name: 'watermelon' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' }
  ],
  [ 
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'vegetable', name: 'carrots' }
  ],
  [
    { type: 'meat', name: 'beef' },
    { type: 'meat', name: 'chicken' }
  ],
  [
    { type: 'fruit', name: 'pineapple' },
    { type: 'fruit', name: 'strawberry' }
  ],
  [
    { type: 'vegetable', name: 'cucumbers' }
  ]
]

"packGroceries(groceryItems, 4)"
Sample Output for "packGroceries" function with 4 items per bag
[
  [
    { type: 'fruit', name: 'watermelon' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' },
    { type: 'fruit', name: 'pineapple' },
  ],
  [ 
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'vegetable', name: 'carrots' },
    { type: 'vegetable', name: 'cucumbers' }
  ],
  [
    { type: 'meat', name: 'beef' },
    { type: 'meat', name: 'chicken' }
  ],
  [
    { type: 'fruit', name: 'strawberry' }
  ]
]
*/
