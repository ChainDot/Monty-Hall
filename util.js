const readlineSync = require("readline-sync");
const { randomInt } = require("crypto");
const doors = ["goat", "goat", "goat"];

//setup car in doors array
const setCar = (doors) => {
  const n = randomInt(0, doors.length);
  doors[n] = "car";
};
// console.log(setCar(doors));
// console.log(doors);

const showDoor = (doorsChoices) => {
  console.log(doorsChoices);
};
// showDoor(doorsChoices);

const indexOfGoat = (doors, word, doorPicked) => {
  const tmpArray = [];
  let index = doors.indexOf(word);
  while (index !== -1) {
    tmpArray.push(index);
    index = doors.indexOf(word, index + 1);
  }
  let res = tmpArray.filter((nb) => nb !== doorPicked);
  const n = randomInt(0, res.length);
  return res[n];
};

const indexOfCar = (doors, word) => {
  let index = doors.indexOf(word);
  return index;
};
// console.log(indexOfCar(doors, "car"));

const doorShow = (doorsChoices, index) => {
  doorsChoices[index] = "goat";
  return doorsChoices;
};

const result = (doors, doorPicked) => {
  if (doorPicked === indexOfCar(doors, "car")) {
    console.log("You won");
  } else {
    console.log("You lose");
  }
};

const resultAuto = (doors, doorPicked) => {
  let countWin = 0;
  let countLost = 0;
  if (doorPicked === indexOfCar(doors, "car")) {
    console.log("You won");
    countWin++;
  } else {
    console.log("You lose");
    countLost++;
  }
  console.log(countWin);
  console.log(countLost);
};

exports.doors = doors;
exports.setCar = setCar;
exports.showDoor = showDoor;
exports.indexOfGoat = indexOfGoat;
exports.indexOfCar = indexOfCar;
exports.doorShow = doorShow;
exports.result = result;
exports.resultAuto = resultAuto;
