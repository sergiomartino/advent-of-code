function toNumberList(numberListAsMultiLineText) {
  return numberListAsMultiLineText.split(`\n`).map((n) => Number.parseInt(n));
}

module.exports = {
  toNumberList,
};
