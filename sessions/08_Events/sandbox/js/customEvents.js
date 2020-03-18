const userForm = document.querySelector('.userForm');
let players = [];

// console.log(userForm);

function handleSubmit(e){
  e.preventDefault();

  // Get from value
  // const name = userForm.username.value.trim();
  const name = e.currentTarget.username.value.trim();

  //if empty don't run function
  if(!name) return;
  

  // Create Item Object
  const player = {
    name,
    id: Date.now(),
    allstar: false
  };

  // Add player to players array
  players.push(player);

  
  console.log(players);
  
  //Clear input field
  userForm.reset();
}


userForm.addEventListener('submit', handleSubmit);