const { chunkHorizontally, truthy } = require("../utils");

function extractDrawAndBoards(input, boardSize) {
  const [draw, , ...boards] = input.split("\n");
  return [
    draw,
    chunkHorizontally(
      boards
        .filter(truthy)
        .map((board) => board.split(" ").filter(truthy))
        .flat(),
      boardSize ** 2
    ).map((board) => ({
      board,
      marked: Array.from({ length: boardSize ** 2 }, () => false),
    })),
  ];
}

module.exports = {
  extractDrawAndBoards,
};
