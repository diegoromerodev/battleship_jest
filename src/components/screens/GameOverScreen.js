import React from "react";
import styled from "styled-components";
import StyledButton from "../styles/StyledButton";

const GameOverContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #333;
  color: #fafafa;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GameOverScreen = (props) => {
  const { startGame, turn } = props;
  return (
    <GameOverContainer>
      <h2>GAME END.</h2>
      <h3>{turn === "p-1" ? "PLAYER 1" : "PLAYER 2"} WINS</h3>
      <StyledButton onClick={startGame}>NEW GAME</StyledButton>
    </GameOverContainer>
  );
};

export default GameOverScreen;
