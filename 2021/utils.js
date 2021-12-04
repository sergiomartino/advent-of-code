function chunkHorizontally(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

function chunkHorizontallyAndVertically(arr, size) {
  const horizontal = [];
  const vertical = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) horizontal.push(arr.slice(i, i + size));
    (vertical[i % size] = vertical[i % size] || []).push(arr[i]);
  }

  return [horizontal, vertical];
}

function toNumber(str) {
  return Number.parseInt(str);
}

function truthy(item) {
  return !!item;
}

function everyTruthyElement(items) {
  return items.every(truthy);
}

function toBinaryList(binaryListAsText) {
  return binaryListAsText.split("\n");
}

function toDecimal(binaryArray) {
  return Number.parseInt(binaryArray.join(""), 2);
}

function toNumberList(numberListAsMultiLineText) {
  return numberListAsMultiLineText.split(`\n`).map((n) => Number.parseInt(n));
}

function invertIntBoolean(num) {
  return +!num;
}

module.exports = {
  chunkHorizontally,
  chunkHorizontallyAndVertically,
  truthy,
  everyTruthyElement,
  toNumber,
  toDecimal,
  toBinaryList,
  toNumberList,
  invertIntBoolean,
};
