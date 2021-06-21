import { createGlobalStyle } from "styled-components";
import bg from "../../assets/general-bg.png";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        border: none;
        font-family: "VT323", monospace;
    }
    body {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background: #12aaf0 url(${bg}) no-repeat fixed center;
        background-size: cover;
    }
`;

export default GlobalStyles;
