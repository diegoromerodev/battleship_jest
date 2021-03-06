import styled from "styled-components";

import smallShip from "../../assets/smallShip.png";
import medShip from "../../assets/medShip.png";
import largeShip from "../../assets/largeShip.png";
import xlShip from "../../assets/xlShip.png";
import smallShipX from "../../assets/smallShipX.png";
import medShipX from "../../assets/medShipX.png";
import largeShipX from "../../assets/largeShipX.png";
import xlShipX from "../../assets/xlShipX.png";

const ElasticDiv = styled.div.attrs((props) => ({
  top: props.top + window.scrollY + "px",
  left: props.left + window.scrollX + "px",
  [props.orientation === "x" ? "width" : "height"]: props.length * 3 + "vw",
  [props.orientation === "x" ? "height" : "width"]: "3vw",
}))`
  position: absolute;
  box-sizing: border-box;
  border: 1px solid red;
  background-image: url(${(props) => {
    const upside = props.orientation === "y";
    switch (props.length) {
      case 1:
        return upside ? smallShip : smallShipX;
      case 2:
        return upside ? medShip : medShipX;
      case 3:
        return upside ? largeShip : largeShipX;
      default:
        return upside ? xlShip : xlShipX;
    }
  }});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(5, 5, 5, 0.3);
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  pointer-events: ${(props) => (props.setting ? "" : "none")};
  opacity: 0.8;
  transition: background-color 0.4s ease-in-out;
  transition: opacity 0.4s ease-in-out;
  animation: float 2s infinite;
  animation-direction: alternate;
  &:nth-child(even) {
    animation: float 3s infinite;
    animation-direction: alternate;
  }
  @media (max-width: 1250px) {
    ${(props) => [props.orientation === "x" ? "width" : "height"]}: ${(props) =>
      props.length * 3.5}vh;
    ${(props) => [props.orientation === "x" ? "height" : "width"]}: 3vh;
  }
  @keyframes float {
    from {
      transform: translateX(-1.5px);
    }
    to {
      transform: translateX(1.5px);
    }
  }
  &.hidden {
    opacity: 0;
    pointer-events: none;
  }
  &.sunk {
    display: flex;
    opacity: 0.9;
    display: "";
    background-color: rgba(190, 25, 5, 0.7);
  }
`;

export default ElasticDiv;
