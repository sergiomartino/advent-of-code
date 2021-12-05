const { input, BOARD_SIZE } = require("./input");
const { firstWinner } = require("./step1");
const { lastWinner } = require("./step2");

console.log("Step1:", firstWinner(input, BOARD_SIZE));
console.log("Step2:", lastWinner(input, BOARD_SIZE));
