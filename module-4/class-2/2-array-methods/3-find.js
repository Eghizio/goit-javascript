// find - searches for first value that passes test, if not found returns undefined
console.clear();

const players = [
  { id: "1", username: "Sephiroth", level: 42 },
  { id: "2", username: "Nooby", level: 1 },
  { id: "3", username: "JW", level: 25 },
  { id: "4", username: "Freshman", level: 1 },
];

const playerWithId3 = players.find(player => player.id === "3");
console.log("ID 3:", playerWithId3);

const playerWithId6 = players.find(player => player.id === "6");
console.log("ID 6:", playerWithId6);


const newbie = players.find(player => player.level === 1);
console.log("Lvl 1:", newbie);



// findIndex - gets index of first value passing the test
console.clear();

const indexOfFreshman = players.findIndex(player => player.username === "Freshman");
const indexOfJacob = players.findIndex(player => player.username === "Jacob");

console.log(indexOfFreshman);
console.log(indexOfJacob);