function calculateCommonCounts(binaryList, filter = toMoreCommonFilter) {
  const oneCounts = Array.from({ length: binaryList[0].length }, () => 0);
  binaryList
    .map((binary) => binary.split(""))
    .forEach((parts) => parts.forEach((part, i) => part === "1" && oneCounts[i]++));

  return [oneCounts, oneCounts.map(filter(binaryList))];
}

function toLeastCommonFilter(binaryList) {
  return (n) => +(n < binaryList.length / 2);
}

function toMoreCommonFilter(binaryList) {
  return (n) => +(n >= binaryList.length / 2);
}

function moreCommonCountsFilter(binaryList) {
  return calculateCommonCounts(binaryList, toMoreCommonFilter);
}

function leastCommonCountsFilter(binaryList) {
  return calculateCommonCounts(binaryList, toLeastCommonFilter);
}

module.exports = {
  calculateCommonCounts,
  toLeastCommonFilter,
  moreCommonCountsFilter,
  leastCommonCountsFilter,
};
