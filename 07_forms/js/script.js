//globals
const myForm = document.querySelector('.form');
const username = document.querySelector('#name');


myForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  if(myForm.name.value != ''){
    console.log(myForm.name.value);
  }
});

username.addEventListener('keyup', (e)=> {
  e.preventDefault();
  // console.log(username.value);
});