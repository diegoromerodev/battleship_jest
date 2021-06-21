import React, { useEffect, useState } from "react";
import { BoardDiv } from "../components/styles/BoardStyles";
import Cells from "./Cells";

const GameboardUI = ({
  player,
  setting,
  board,
  turn,
  setTurn,
  mode,
  setShipLocations,
  setGameOver,
}) => {
  const [allHits, setAllHits] = useState([]);
  const [allSunk, setAllSunk] = useState([]);

  useEffect(() => {
    setAllHits([]);
  }, [setting]);

  useEffect(() => {
    const allSunk = Array.from(document.querySelectorAll(".sunk")).filter(
      (el) => {
        return el.id.includes(player?.type);
      }
    );
    setAllSunk([...allSunk]);
  }, [allHits, turn]);

  return (
    <div>
      <BoardDiv>
        <Cells
          setGameOver={setGameOver}
          allHits={allHits}
          board={board}
          player={player}
          turn={turn}
          setting={setting}
          mode={mode}
          setAllHits={setAllHits}
          setTurn={setTurn}
          setShipLocations={setShipLocations}
        />
      </BoardDiv>
      {player?.type && (
        <p>
          {player?.type === "p-1" ? "Player 1" : "Player 2"} ships left:{" "}
          {10 - allSunk.length}
        </p>
      )}
    </div>
  );
};

export default GameboardUI;
