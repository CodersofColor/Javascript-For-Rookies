/* Local Storage exists on the window object
*
*/

//sample data
let players = ['lebron', 'giannis', 'james', 'russel', 'AD'];

//set data in local storage
localStorage.setItem('name', 'cortney');
localStorage.setItem('players', players);


//Get data from local storage
let getName = localStorage.getItem('name');
let getPlayers = localStorage.getItem('players');

// console.log(getName);


//updating Data //overwrite the item created previously
localStorage.setItem('name', 'robinson');
getName = localStorage.name = 'alex';

// console.log(getName);

//Deleting Data
//removing a single item with .removeItem() ||remove all items with .clear()

// localStorage.removeItem('name');
localStorage.clear(); //clears all

getName = localStorage.getItem('name');
getPlayers = localStorage.getItem('players');


// console.log(getName, getPlayers);