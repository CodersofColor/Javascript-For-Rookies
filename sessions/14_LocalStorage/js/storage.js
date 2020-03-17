let teams = ["lakers", "knicks", "clippers", "heat", "bucks", "pacers"];


//JSON.stringify stores the entire and array/object
localStorage.setItem('teamList', JSON.stringify(teams));
// localStorage.clear();

//getItem gets the data
const getTeams = () => {
   const team = localStorage.getItem('teamList');

   return JSON.parse(team);

}


//Parse the JSON STRING with JSON.parse() to returnt the object;
console.log(getTeams());

getTeams().map((team) => {
  console.log(team.sort());
} )