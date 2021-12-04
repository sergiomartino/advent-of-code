const { moreCommonCountsFilter, leastCommonCountsFilter } = require("./helper");
const { toDecimal } = require("../utils");

function calculateRating(calculateCounts) {
  return function calculateRatingByCommonCriteria(binaryList, index = 0) {
    const binaryLength = binaryList[0].length - 1;
    const [, commonCounts] = calculateCounts(binaryList);
    const binaryListByCommonCriteria = binaryList.filter((binary) => Number(binary[index]) === commonCounts[index]);
    if (index < binaryLength && binaryListByCommonCriteria.length > 1)
      return calculateRatingByCommonCriteria(binaryListByCommonCriteria, ++index);
    return binaryListByCommonCriteria;
  };
}

function calculateLifeSupportRating(binaryList) {
  const oxygenRating = calculateRating(moreCommonCountsFilter)(binaryList);
  const scrubberRating = calculateRating(leastCommonCountsFilter)(binaryList);
  return toDecimal(oxygenRating) * toDecimal(scrubberRating);
}

module.exports = {
  calculateLifeSupportRating,
};
