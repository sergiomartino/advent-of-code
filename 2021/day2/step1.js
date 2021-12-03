const commands = {
  down: (amount, { d }) => ({ d: d + amount }),
  up: (amount, { d }) => ({ d: d - amount }),
  forward: (amount, { h }) => ({ h: h + amount }),
};

function calculatePosition(movs) {
  const { d, h } = movs.reduce(
    (coordinates, mov) => {
      const [, command, amount] = mov.match(/(down|up|forward)\s(\d+)/);
      const update = commands[command](Number.parseInt(amount), coordinates);
      return Object.assign(coordinates, update);
    },
    { d: 0, h: 0, aim: 0 }
  );

  return d * h;
}

module.exports = {
  calculatePosition,
};
