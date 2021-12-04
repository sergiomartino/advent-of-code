const { input, BOARD_SIZE } = require("./input");
const { firstWinner } = require("./step1");

console.log("Step1:", firstWinner(input, BOARD_SIZE));
