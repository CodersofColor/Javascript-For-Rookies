//-------------
// Get element by ID
//-------------

const headline = document.getElementById('headline');
// console.log(headline);


//-------------
// Get elements by Class Name
//-------------

const first = document.getElementsByClassName('first');
//console.log(first);


//returns an HTML collection
// cannot use a foreach on an HTML collection



//-------------
// Get element by Tag Name
//-------------
const myList = documen.getElementsByTagName('ul');



//-------------
// Get element by Query Selector
//-------------
const firstPara = document.querySelector('body > p');




//-------------
// Get all elements by Query Select All
//-------------
const allPtags = document.querySelectorAll('p');

allPtags.forEach(ptag => {
 
  // console.log(ptag);
     
})


//------------- 
// Select 4th list item
//-------------

const listItems = document.querySelectorAll('li');
// console.log(listItem[3].innerHTML);



