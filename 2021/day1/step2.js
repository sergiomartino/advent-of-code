const { getIncreaseCount } = require("./step1");

function getSlidingWindowsIncreaseCount(numberList) {
  return getIncreaseCount(
    numberList
      .map((item, index, list) => [item, list[index + 1], list[index + 2]])
      .map((slide) => slide.reduce((a, c) => a + c))
  );
}

module.exports = {
  getSlidingWindowsIncreaseCount,
};
