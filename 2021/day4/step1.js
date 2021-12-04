const { extractDrawAndBoards } = require("./helper");
const { chunkHorizontallyAndVertically, everyTruthyElement, toNumber } = require("../utils");

function firstWinner(input, board_size) {
  const [draws, boards] = extractDrawAndBoards(input, board_size);
  const [winningBoard, markedWinningBoard, lastCall] = getWinningBoard(draws, boards, board_size);
  return getSum(winningBoard, markedWinningBoard, lastCall);
}

function getSum(winningBoard, markedWinningBoard, lastCall) {
  return (
    winningBoard
      .map(toNumber)
      .filter((_, index) => !markedWinningBoard[index])
      .reduce((a, b) => a + b) * lastCall
  );
}

function getWinningBoard(draws, boards, board_size) {
  let drawCount = 0;
  for (const draw of draws.split(",")) {
    drawCount++;
    for (const { board, marked } of boards) {
      const index = board.indexOf(draw);
      index !== -1 && (marked[index] = true);
      if (drawCount >= board_size && validate(marked, board_size)) return [board, marked, draw];
    }
  }

  return null;
}

function validate(marked, board_size) {
  const [rows, cols] = chunkHorizontallyAndVertically(marked, board_size);
  return rows.find(everyTruthyElement) || cols.find(everyTruthyElement);
}

module.exports = {
  firstWinner,
};
