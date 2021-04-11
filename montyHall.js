const readlineSync = require("readline-sync");
const {
  doors,
  setCar,
  showDoor,
  indexOfGoat,
  doorShow,
  result,
} = require("./util");

const main = () => {
  //Set car in door array
  setCar(doors);
  console.log(doors);

  //display doors
  let doorsChoices = ["Door1", "Door2", "Door3"];
  showDoor(doorsChoices);

  // input player
  let doorPicked = readlineSync.keyInSelect(
    doorsChoices,
    "Which door would you like to pick ?"
  );

  // index of door to open with a goat behind it
  let index = indexOfGoat(doors, "goat", doorPicked);

  // display the goat behind the select door
  console.log(`I'm gonna show you the door number ${index + 1}`);
  console.log(doorShow(doorsChoices, index));

  doorsChoices.splice(index, 1);
  console.log(doorsChoices);
  // second player input
  doorPicked = readlineSync.keyInSelect(
    doorsChoices,
    "Did you change you mind ?"
  );

  console.log(result(doors, doorPicked));
};

main();
