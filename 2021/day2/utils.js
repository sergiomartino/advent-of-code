function toCommandList(commandsAsMultiLineText) {
  return commandsAsMultiLineText.split("\n");
}

module.exports = {
  toCommandList,
};
