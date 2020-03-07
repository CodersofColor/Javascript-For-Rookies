const link = document.querySelector('a');


//Get attribute
const attr = link.getAttribute('href');


//Set Attribute
link.setAttribute('href', 'http://www.codersofcolor.com');
link.setAttribute('target', '_blank');

// console.log(attr);
// console.log(link.getAttribute('href'));


//
/*
*
*  CLASS ATTRIBUTES
*
*/
//Adding a class
const content = document.getElementById('headline');
content.classList.add('success');

//Removing a class
content.classList.remove('success');
content.classList.add('error');