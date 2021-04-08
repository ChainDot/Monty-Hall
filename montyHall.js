const { randomReplace } = require("./utils");
const { randomInt } = require("crypto");
const fs = require("fs");
const readlineSync = require("readline-sync");
const doors = ["goat", "goat", "goat"];
const display = ["Door1", "Door2", "Door3"];

//ask player name
// const playerName = readlineSync.question("what is your name ?");
// fs.appendFileSync("log.txt", playerName);
// console.log(playerName);

// replace randomly to car.
const defaultDoors = randomReplace(doors);
console.log(defaultDoors);
console.log(display);

//Door pick
const firstPick = readlineSync.keyInSelect(
  display,
  "Which door would you like to pick?"
);
console.log(`You have picked ${display[firstPick]}`);
// console.log(firstPick);

// looking for the goat word in the doors array
let tmpArray = [];
let word = "goat";
let index = doors.indexOf(word);
while (index !== -1) {
  tmpArray.push(index);
  index = doors.indexOf(word, index + 1);
}
console.log(tmpArray);

const arrayFilter = tmpArray.filter(function (value) {
  return value !== firstPick;
});
console.log(arrayFilter);

const n2 = randomInt(0, arrayFilter.length);
const index0fDoorPicked = arrayFilter[n2];

console.log(index0fDoorPicked);

//change display to the door to open
const openFirstDoor = display.splice(
  index0fDoorPicked,
  1,
  doors[index0fDoorPicked]
);
console.log(`I'm gonna open the ${openFirstDoor}`);
console.log(display);
//remove goat in the display array
display.splice(index0fDoorPicked, 1);
console.log(display);

doors.splice(index0fDoorPicked, 1);
console.log(doors);

//2nd door pick
const secondPick = readlineSync.keyInSelect(
  display,
  `right now! you have 2 choices you can either change or stick to your original choice?`
);
console.log(secondPick);
console.log(`You have picked ${display[secondPick]}`);
console.log(doors);

if (doors[secondPick] === "car") {
  console.log("you won");
} else {
  console.log("you lost");
}
