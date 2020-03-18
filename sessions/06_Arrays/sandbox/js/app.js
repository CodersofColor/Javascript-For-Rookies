//EXAMPLE ARRAYS
const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const scores = [10, 30, 15, 25, 40];
const players = [
  { name: 'lebron', allstar: true, points: 30 },
  { name: 'giannis', allstar: true, points: 28 },
  { name: 'kyle', allstar: false, points: 17 },
  { name: 'russell', allstar: true, points: 22 },
  { name: 'barret', allstar: false, points: 14 }
];
const names = ['lebron', 'giannis', 'kyle', 'russel', 'barret'];

/*
*
************ Filter Method ***************
* The filter method returns a new array with the all the elements that pass the test
*
*/

const highScores = scores.filter((score) => {
  if (score > 25) {
    return score;
  }
});

// console.table(highScores);


// const stars = players.filter( player => player.allstar);
// console.log(stars);

/*
*
************ Sort Method ***************
* The Sort() method sorts the elements of an array in place using a compare function and returns the sorted array. 
*
*     sort(compareFunction(){    });
*   sort autmatically puts array items in alphabetical order
*/
const stats = scores.sort((a, b) => {

  if (a > b) {
    return 1;
  } else {
    return -1;
  }

});

const ppg = players.sort((a, b) => {
  return a.points > b.points ? -1 : 1;
})

// console.table(ppg);

// console.log(names);
// names.sort();
// console.log(names);
// names.reverse(); // reverses the order of an alphabetical array



/*
*
************ Map Method ***************
* Creates a new array and returns the same number of items given to it
*/

const divScores = scores.map((score) => {
  return score / 2;
});
// console.table(divScores, scores);


const mvpPlayer = players.map(player => {
  if (player.points >= 25) {
    return { name: player.name, points: player.points, mvp: true }
  } else {
    return player;
  }
});

// console.log(mvpPlayer, players);


/*
*
************ Reduce Method ***************
* Returns any single value based on the values we want
*/

const lowestScores = scores.reduce((total, score) => {
  if (score < 30) {
    total++;
  }
  return total;
  //returns 3 beccause three scores are less than 30
}, 0);

// console.log(lowestScores);

const totalPoints = players.reduce((acc, curr) => {
  acc += curr.points;
  return acc;
}, 0);

// console.log(totalPoints);
// scores.push(60);
// scores.pop();
// console.log(scores);

/*
*
************ Find Method ***************
* Returns value of first element that passes a test
*/
const firstScore = scores.find((score) => {
  return score > 30;
})

// console.log(firstScore);




//Spred and Rest



//SETS