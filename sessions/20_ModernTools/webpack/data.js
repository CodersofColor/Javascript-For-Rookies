const players = [
  { name: 'lebron', allstar: true },
  { name: 'giannis', allstar: true },
  { name: 'kyle', allstar: false },
  { name: 'kyrie', allstar: true },
  { name: 'rudy', allstar: false },
];

const getStars = (players) => {
  return players.filter(player => player.allstar);
};


// export default players;

//alternative export

export { getStars, players as default };