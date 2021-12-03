const input = require("./input");
const { toBinaryList } = require("./utils");
const { getPowerConsumption } = require("./step1");

console.log("Step1:", getPowerConsumption(toBinaryList(input)));
