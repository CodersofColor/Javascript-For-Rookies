//TYPICAL USER EVENTS
/* click
* keyup
* keydown
* scroll
* submit
*/

const list = document.querySelector('ul');
const button = document.querySelector('button');




//Add a list item
list.addEventListener('click', (e)=> {
  if(e.target.tagName === 'LI'){
    console.log(e.target);
    // e.stopPropagation();
    e.target.remove();
  }
});

button.addEventListener('click',(e) =>{
  const listItem = document.createElement('li');
  listItem.textContent ='new list item';

  list.append(listItem);
})