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
  for (let i = 0; i < 3; i++) {
    //Set car in door array
    setCar(doors);
    console.log(doors);

    //display doors
    let doorsChoices = ["Door1", "Door2", "Door3"];
    showDoor(doorsChoices);

    // input player
    let doorPicked = randomInt(0, doorsChoices.length);

    // index of door to open with a goat behind it
    let index = indexOfGoat(doors, "goat", doorPicked);

    console.log(doorShow(doorsChoices, index));

    doorsChoices.splice(index, 1);
    console.log(doorsChoices);
    // second player input

    console.log(result(doors, doorPicked));
  }
};

main();
