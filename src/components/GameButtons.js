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
  const { setRotate, setSetting, setTurn, mode, turn, rotate } = props;
  return (
    <ButtonsContainer>
      <StyledButton onClick={() => setSetting(false)}>
        DONE SETTING
      </StyledButton>
      <StyledButton onClick={() => setRotate(!rotate)}>
        ROTATE TOOL: {rotate ? "YES" : "NO"}
      </StyledButton>
      {mode !== "npc" && (
        <StyledButton onClick={() => setTurn(turn === "p-1" ? "p-2" : "p-1")}>
          SET NEXT PLAYER
        </StyledButton>
      )}
    </ButtonsContainer>
  );
};

export default GameButtons;
