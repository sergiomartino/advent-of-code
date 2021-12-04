const { chunkHorizontally, truthy } = require("../utils");

function extractDrawAndBoards(input, size) {
  const [draw, , ...boards] = input.split("\n");
  return [
    draw,
    chunkHorizontally(
      boards
        .filter(truthy)
        .map((board) => board.split(" ").filter(truthy))
        .flat(),
      size ** 2
    ).map((board) => ({
      board,
      marked: Array.from({ length: size ** 2 }, () => false),
    })),
  ];
}

module.exports = {
  extractDrawAndBoards,
};
