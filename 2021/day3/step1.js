const { toDecimal, invertIntBoolean, calculateCommonCounts } = require("./utils");

function calculatePowerConsumption(binaryList) {
  const [, gamma] = calculateCommonCounts(binaryList);
  const epsilon = gamma.map(invertIntBoolean);
  return toDecimal(gamma) * toDecimal(epsilon);
}

module.exports = {
  calculatePowerConsumption,
};
