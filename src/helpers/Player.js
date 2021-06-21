const Player = (type) => {
  const madeMoves = [];
  const makeMove = (coords, board) => {
    console.error({ coords });
    let move = coords;
    if (!coords) {
      do {
        move = `${Math.floor(Math.random() * 10)}-${Math.floor(
          Math.random() * 10
        )}`;
      } while (madeMoves.includes(move));
    } else if (coords && madeMoves.includes(coords)) {
      return false;
    }

    madeMoves.push(move);
    if (board) return board.receiveAttack(move);
  };

  return { type, madeMoves, makeMove };
};

export default Player;
