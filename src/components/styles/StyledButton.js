import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.2em;
  padding: 10px 20px;
  margin: 10px 10px;
  cursor: pointer;
  background-color: #444;
  color: #fafafa;
  transition: all 0.2s ease-in-out;
  border: 2px solid #fafafa;
  &:hover {
    background-color: #999;
  }
  &.start-button {
    font-size: 1.4em;
    padding: 15px 30px;
  }
  &.start-game {
    background-color: #239c0a;
  }
`;

export default StyledButton;
