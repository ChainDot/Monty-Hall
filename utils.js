const fs = require("fs");

const readlineSync = require("readline-sync");

const string = "Which door would you like to pick?";
const tmpArray = [];

// randomly replace one goat with a prize.
const randomReplace = () => {
  const { randomInt } = require("crypto");
  const n = randomInt(0, 3);
  let doors = ["goat", "goat", "goat"];
  doors[n] = "car";
  return doors;
};
exports.randomReplace = randomReplace;

//questions readlineSync keyInselect
const pickQuestion = (array, string) => {
  return readlineSync.keyInSelect(array, string);
};
// console.log(pickQuestion(doors, string));
exports.pickQuestion = pickQuestion;

//Determine Index Array
const indiceOfArray = (word, array, tmpArray) => {
  index = array.indexOf(word);
  while (index !== -1) {
    tmpArray.push(index);
    index = array.indexOf(word, index + 1);
  }
  return tmpArray;
};

exports.indiceOfArray = indiceOfArray;
// console.log(indiceOfArray("goat", doors, tmpArray));
