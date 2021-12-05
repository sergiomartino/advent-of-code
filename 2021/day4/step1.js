const { extractDrawAndBoards } = require("./helper");
const { chunkHorizontallyAndVertically, everyTruthyElement, toNumber } = require("../utils");

function firstWinner(input, boardSize) {
  const [draws, boards] = extractDrawAndBoards(input, boardSize);
  const [winningBoard, markedWinningBoard, lastCall] = getWinningBoard(draws, boards, boardSize);
  return getSum(winningBoard, markedWinningBoard, lastCall);
}

function getSum(winningBoard, markedWinningBoard, lastCall) {
  return (
    winningBoard
      .map(toNumber)
      .filter((_, index) => !markedWinningBoard[index])
      .reduce((a, b) => a + b, 0) * lastCall
  );
}

function getWinningBoard(draws, boards, boardSize) {
  let drawCount = 0;
  for (const draw of draws.split(",")) {
    drawCount++;
    for (const { board, marked } of boards) {
      const index = board.indexOf(draw);
      index !== -1 && (marked[index] = true);
      if (drawCount >= boardSize && validate(marked, boardSize)) return [board, marked, draw];
    }
  }

  return [];
}

function validate(marked, boardSize) {
  const [rows, cols] = chunkHorizontallyAndVertically(marked, boardSize);
  return rows.find(everyTruthyElement) || cols.find(everyTruthyElement);
}

module.exports = {
  firstWinner,
  validate,
  getSum,
};
