

(function(){

  //globals
  const myForm = document.querySelector('.form');
  const username = document.querySelector('#name');
  const feedback = document.querySelector('.feedback');  


  myForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    
    //validation
    const formValue = myForm.name.value;
    const pattern = /^[a-zA-Z0-9]{7,12}$/;

    if(formValue != '' && pattern.test(formValue) ){
      feedback.classList.add('show');
      feedback.textContent = 'username is valid';
    } else {
      if(feedback.classList.contains('show')){
        feedback.classList.remove('show');
      }
    }
    // return formValue;
  });

  username.addEventListener('keyup', (e)=> {
    e.preventDefault();
    const val = myForm.name.value;
    const pattern = /^[a-zA-Z0-9]{7,12}$/;
    
    if( pattern.test(e.target.value )){
      username.setAttribute('class', 'valid');
    } else {
      if( username.classList.contains('valid')) {
        username.setAttribute('class', 'error');
      }
      console.log('not valid');
    }
  });

})();

