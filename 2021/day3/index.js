const input = require("./input");
const { toBinaryList } = require("../utils");
const { calculatePowerConsumption } = require("./step1");
const { calculateLifeSupportRating } = require("./step2");

console.log("Step1:", calculatePowerConsumption(toBinaryList(input)));
console.log("Step2:", calculateLifeSupportRating(toBinaryList(input)));
