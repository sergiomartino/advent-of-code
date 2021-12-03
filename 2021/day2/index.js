const input = require("./input");
const { toCommandList } = require("./utils");
const step1 = require("./step1");
const step2 = require("./step2");

console.log("Step1:", step1.calculatePosition(toCommandList(input)));
console.log("Step2:", step2.calculatePosition(toCommandList(input)));
