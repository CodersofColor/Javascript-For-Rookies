const pop = document.querySelector('.pop');
const popup = document.querySelector('.popup-wrap');
const close = document.querySelector('.close');


pop.addEventListener('click', (e)=> {
  if(!popup.classList.contains('open')){
    popup.classList.add('open');
  } else {
    popup.classList.remove('open');
  }
});

close.addEventListener('click', (e) => {
  if(popup.classList.contains('open')){
    popup.classList.remove('open');
  }
});

popup.addEventListener('click', (e) => {
  popup.classList.remove('open');
});