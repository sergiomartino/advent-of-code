const input = require("./input");
const { toNumberList } = require("../utils");
const { getIncreaseCount } = require("./step1");
const { getSlidingWindowsIncreaseCount } = require("./step2");

console.log("Step1:", getIncreaseCount(toNumberList(input)));
console.log("Step2:", getSlidingWindowsIncreaseCount(toNumberList(input)));
