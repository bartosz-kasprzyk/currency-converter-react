import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        padding: 10px;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        line-height: 1.5;

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 18px;
        }
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        background-image: url("${background}");
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: fixed;
        background-size: cover;
    }
`