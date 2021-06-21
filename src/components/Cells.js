import React, { useEffect } from "react";
import { BoardCell } from "./styles/BoardStyles";

const Cells = (props) => {
  const {
    allHits,
    board,
    player,
    turn,
    setting,
    mode,
    setAllHits,
    setTurn,
    setShipLocations,
    setGameOver,
  } = props;
  let isHitClass;
  let isMissedClass;

  useEffect(() => {
    if (mode === "npc" && turn === "p-2") setTimeout(handleCellClick, 100);
  }, [turn]);

  const moveMaker = (key, board) => {
    const result = player?.makeMove(key, board);
    setAllHits((prevState) => {
      if (mode === "npc" && turn === "p-2") {
        key = player?.madeMoves?.slice(-1).toString();
      }

      if (result) return [...prevState, key];
      return [...prevState];
    });
    if (result && mode === "npc" && turn === "p-2") {
      const lastMove = player?.madeMoves.slice(-1)[0];
      const newMove = lastMove.split("-");
      moveMaker(
        `${Number(newMove[0]) + Math.round(Math.random())}-${
          Number(newMove[1]) + Math.round(Math.random())
        }`,
        board
      );
      return;
    }

    if (result) setShipLocations((prevState) => [...prevState]);
    console.warn(board.checkAllSunk());
    if (board.checkAllSunk()) {
      setGameOver(true);
      return;
    }

    if (!result) setTurn((prevState) => (prevState === "p-1" ? "p-2" : "p-1"));
  };

  const handleCellClick = (key) => {
    if (player?.madeMoves.includes(key)) return;
    if (setting || turn === player?.type) return;
    if (allHits.includes(key)) return;
    if (mode === "npc" && turn === "p-2") key = "";
    moveMaker(key, board);
  };

  const checkHits = (key) => {
    isHitClass = allHits?.includes(key) && "hit";
    isMissedClass = board?.missedShots?.includes(key) && "missed";
    return `${isHitClass} ${isMissedClass}`;
  };

  const cells = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const key = i + "-" + j;
      cells.push(
        <BoardCell
          id={player?.type + key}
          key={key}
          onClick={handleCellClick.bind(null, key)}
          className={checkHits(key)}
        />
      );
    }
  }

  return cells;
};

export default Cells;
