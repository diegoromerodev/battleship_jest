import React from "react";

const GameButtons = (props) => {
  const { setRotate, setSetting, setTurn, mode, turn, rotate } = props;
  return (
    <>
      <button onClick={() => setSetting(false)}>DONE SETTING</button>
      <button onClick={() => setRotate(!rotate)}>
        ROTATE TOOL: {rotate ? "YES" : "NO"}
      </button>
      {mode !== "npc" && (
        <button onClick={() => setTurn(turn === "p-1" ? "p-2" : "p-1")}>
          SET NEXT PLAYER
        </button>
      )}
    </>
  );
};

export default GameButtons;
