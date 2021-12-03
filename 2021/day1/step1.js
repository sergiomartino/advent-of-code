const { input } = require("./input");

function toNumberList(numberListAsMultiLineText) {
  return numberListAsMultiLineText.split(`\n`).map((n) => Number.parseInt(n));
}

function getIncreaseCount(numberList) {
  return numberList.reduce((acc, item, index, list) => {
    if (index === 0) return acc;
    if (item > list[index - 1]) acc += 1;
    return acc;
  }, 0);
}

module.exports = {
  getIncreaseCount,
  toNumberList,
};
