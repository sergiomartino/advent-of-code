function toBinaryList(binaryListAsText) {
  return binaryListAsText.split("\n");
}

function toDecimal(binaryArray) {
  return Number.parseInt(binaryArray.join(""), 2);
}

function invertIntBoolean(num) {
  return +!num;
}

module.exports = {
  toBinaryList,
  toDecimal,
  invertIntBoolean,
};
