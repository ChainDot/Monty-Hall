const readlineSync = require("readline-sync");
const { randomInt } = require("crypto");
const {
  doors,
  setCar,
  showDoor,
  indexOfGoat,
  doorShow,
  result,
  resultAuto,
} = require("./util");
let doorsChoices = ["Door1", "Door2", "Door3"];

const main = () => {
  //Set car in door array
  const doors = ["goat", "goat", "goat"];
  setCar(doors);
  console.log(doors);

  //display doors
  let doorsChoices = ["Door1", "Door2", "Door3"];

  // input player
  let doorPicked = randomInt(0, doorsChoices.length);

  // index of door to open with a goat behind it
  let index = indexOfGoat(doors, "goat", doorPicked);

  console.log(doorShow(doorsChoices, index));

  doorsChoices.splice(index, 1);
  // second player input

  console.log(result(doors, doorPicked));

  if (doors[doorPicked] === "car") {
    countWin++;
  } else {
    countLose++;
  }
};

let countWin = 0;
let countLose = 0;
for (let i = 0; i < process.argv[2]; i++) {
  main();
}
console.log(`${countWin} win`);
console.log(`${countLose} lose`);
