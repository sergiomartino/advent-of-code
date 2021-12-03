const { toDecimal, invertIntBoolean } = require("./utils");

function getPowerConsumption(binaryList) {
  const counts = Array.from({ length: binaryList[0].length }, () => 0);
  const toMoreCommon = (n) => +(n > binaryList.length / 2);

  binaryList
    .map((binary) => binary.split(""))
    .forEach((parts) => parts.forEach((part, i) => part === "1" && counts[i]++));

  const gamma = counts.map(toMoreCommon);
  const epsilon = gamma.map(invertIntBoolean);

  return toDecimal(gamma) * toDecimal(epsilon);
}

module.exports = {
  getPowerConsumption,
};
