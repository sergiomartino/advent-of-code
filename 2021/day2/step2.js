const commands = {
  down: (amount, { aim }) => ({ aim: aim + amount }),
  up: (amount, { aim }) => ({ aim: aim - amount }),
  forward: (amount, { h, d, aim }) => ({ h: h + amount, d: d + aim * amount }),
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
