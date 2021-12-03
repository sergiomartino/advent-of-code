function getIncreaseCount(numberList) {
  return numberList.reduce((acc, item, index, list) => {
    if (index === 0) return acc;
    if (item > list[index - 1]) acc += 1;
    return acc;
  }, 0);
}

module.exports = {
  getIncreaseCount,
};
