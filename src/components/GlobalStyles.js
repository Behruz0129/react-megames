import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body {
        font-family: 'Raleway', sans-serif;
        width: 100%;
    }
    h2 {
        padding: 5rem 0;
        font-size: 3rem;
        color: #626262;
    }
    h3 {
        font-family: "Audiowide", sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        color: #847eed;
    }
    p {
        color: #747474;
        font-size: 1rem;
        font-weight: 500;
        line-height: 200%;
    }
    a {
        text-decoration: none;
        color: #333;
    }
`;

export default GlobalStyles;
