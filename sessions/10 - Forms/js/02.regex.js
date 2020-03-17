
export default regex;

function regex(){
  const formName = document.querySelector('#name').value;
  const pattern = /^[a-zA-Z0-9]{7,12}$/;

  //Testing regex patterns
  // let result = pattern.test(formName.name);

  let result = formName.search(pattern);
  //returns -1 if there is no match or the postion of the match

  if(result){
    console.log(result);
  } else {
    console.log('regex test failed');
  }
}