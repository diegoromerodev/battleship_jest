import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  & .logo {
    font-size: 7em;
    text-shadow: -5px -5px 0 #333;
    background: -webkit-linear-gradient(
      -90deg,
      rgba(255, 131, 70, 1) 0%,
      rgba(60, 60, 240, 1) 100%,
      rgba(60, 139, 213, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 20px 0;
    @media (max-width: 1260px) {
      font-size: 4em;
      margin: 5px 0;
    }
  }
`;

export default AppContainer;
