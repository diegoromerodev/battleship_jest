import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledButton from "../styles/StyledButton";

const FullscreenDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #333;
  color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &.hidden {
    display: none;
    z-index: -1;
  }
`;

const NextPlayerScreen = (props) => {
  const { turn } = props;
  const [lastTurn, setLastTurn] = useState("p-1");
  const hideScreen = () => {
    document.getElementById("wait-screen").classList.add("hidden");
  };

  useEffect(() => {
    if (turn !== lastTurn) {
      setTimeout(() => {
        document.getElementById("wait-screen").classList.remove("hidden");
      }, 0);
      setLastTurn(turn);
    }
  });

  return (
    <FullscreenDiv id="wait-screen">
      <h2>PLAYER {props.turn.substr(-1)}&apos;S TURN</h2>
      <StyledButton onClick={hideScreen}>START TURN</StyledButton>
    </FullscreenDiv>
  );
};

export default NextPlayerScreen;
