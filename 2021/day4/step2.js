const { extractDrawAndBoards } = require("./helper");
const { validate, getSum } = require("./step1");

function lastWinner(input, boardSize) {
  const [draws, boards] = extractDrawAndBoards(input, boardSize);
  const [{ board, marked, winningCall }] = getLastWinningBoard(draws, boards, boardSize);
  return getSum(board, marked, winningCall);
}

function getLastWinningBoard(draws, boards, boardSize) {
  return draws
    .split(",")
    .map((draw, drawCount) =>
      boards.map((board) => {
        if (board.winningDraw > -1) return board;
        return decorateWithWin(decorateWithMark(board, draw), boardSize, draw, drawCount);
      })
    )
    .flat()
    .sort((a, b) => b.winningDraw - a.winningDraw);
}

function decorateWithMark(desc, draw) {
  const index = desc.board.indexOf(draw);
  index !== -1 && (desc.marked[index] = true);
  return desc;
}

function decorateWithWin(desc, boardSize, draw, drawCount) {
  desc.winningDraw = validate(desc.marked, boardSize) && drawCount;
  desc.winningCall = desc.winningDraw ? draw : -1;
  return desc;
}

module.exports = {
  lastWinner,
  getLastWinningBoard,
};
