import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FullscreenDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #333;
  color: #fafafa;
  &.hidden {
    display: none;
    z-index: -1;
  }
`;

const NextPlayerScreen = (props) => {
  console.log("hi");

  const hideScreen = () => {
    document.getElementById("wait-screen").classList.add("hidden");
  };

  useEffect(() =>
    document.getElementById("wait-screen").classList.remove("hidden")
  );

  return (
    <FullscreenDiv id="wait-screen">
      <h2>PLAYER {props.turn.substr(-1)}&apos;S TURN</h2>
      <button onClick={hideScreen}>START TURN</button>
    </FullscreenDiv>
  );
};

export default NextPlayerScreen;
