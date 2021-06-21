const { default: Gameboard } = require("./Gameboard");
const { default: Player } = require("./Player");

const GameLoop = (mode) => {
  const playerOne = Player("p-1");
  const playerTwo = Player("p-2");
  const gameboardHome = Gameboard();
  const gameboardAway = Gameboard();

  gameboardHome.start();
  gameboardAway.start();

  const autoPlace = (board) => {
    let count = 0;
    do {
      const placed = board.placeShips(
        count,
        `${Math.floor(Math.random() * 10)}-${Math.floor(Math.random() * 10)}`
      );
      if (!placed) continue;
      count++;
    } while (count < board.ships.length);
  };

  autoPlace(gameboardHome);
  autoPlace(gameboardAway);

  return {
    autoPlace,
    playerOne,
    playerTwo,
    gameboardHome,
    gameboardAway,
  };
};

export default GameLoop;
