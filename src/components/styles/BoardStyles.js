import styled from "styled-components";

import water from "../../assets/water.jpg";
import splash from "../../assets/splash.png";
import hit from "../../assets/hit.png";

const BoardDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 3vw);
  background-image: url(${water});
  background-size: cover;
  background-position: center;
`;

const BoardCell = styled.div`
  border: 3px solid white;
  border-top: none;
  border-left: none;
  background-color: lightblue;
  width: 3vw;
  height: 3vw;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    background-color: navy;
    opacity: 0.5;
    border-color: navy;
  }
  &.hit {
    opacity: 0.5;
    background-image: url(${hit});
    background-size: contain;
    background-position: center;
    background-color: rgba(190, 25, 5, 0.4);
    border-color: rgba(190, 25, 5, 0.4);
    opacity: 0.9;
  }
  &.missed {
    background-image: url(${splash});
    background-size: contain;
    background-position: center;
    background-color: rgba(5, 5, 5, 0.2);
    opacity: 0.9;
    border-color: rgba(5, 5, 5, 0.2);
    border-radius: 50%;
  }
`;

export { BoardDiv, BoardCell };
