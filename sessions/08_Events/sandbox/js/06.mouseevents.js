const copy = document.querySelector('.copy');


//Copy event
copy.addEventListener('copy', ()=> {
  alert('please dont copy our stuff');
});

//Mouse moving
const box = document.querySelector('.box');


box.addEventListener('mousemove',(e)=> {
  // console.log(e);
  const setX = e.offsetX;
  const setY = e.offsetY;

  // console.log(setX + ' ' + setY);

  box.innerText = `${setX} ${setY}`;
});

//Scroll Events

const myWindow = document;
myWindow.addEventListener('wheel', (e) => {
  // console.log(e.pageX + ' ' + e.pageY);
});
