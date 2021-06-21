import React from "react";
import StyledButton from "./styles/StyledButton";
import styled from "styled-components";

const ButtonsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameButtons = (props) => {
  const {
    setRotate,
    setSetting,
    setMode,
    setTurn,
    mode,
    turn,
    rotate,
    startGame,
  } = props;
  return (
    <ButtonsContainer>
      <StyledButton
        className="start-game"
        onClick={() => {
          setSetting(false);
          setTurn("p-1");
        }}
      >
        START BATTLE
      </StyledButton>
      <StyledButton onClick={() => setRotate(!rotate)}>
        ROTATE TOOL: {rotate ? "YES" : "NO"}
      </StyledButton>
      {mode !== "npc" && (
        <StyledButton onClick={() => setTurn(turn === "p-1" ? "p-2" : "p-1")}>
          SET NEXT PLAYER
        </StyledButton>
      )}
      <StyledButton
        onClick={() => {
          setMode(mode === "npc" ? "2p" : "npc");
          startGame();
        }}
      >
        MODE: {mode.toUpperCase()}
      </StyledButton>
    </ButtonsContainer>
  );
};

export default GameButtons;
