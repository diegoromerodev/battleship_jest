import styled from "styled-components";

const GameboardContainer = styled.div`
  display: flex;
  flex-align: center;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  box-sizing: border-box;
  @media (max-width: 1260px) {
    width: 35vh;
    flex-direction: column;
    justify-content: "";
  }
`;

export default GameboardContainer;
