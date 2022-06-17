import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.main};
    }
    
    body {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.secondary};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input, button {
        outline: none;
        display: block;
        height: 3.5rem;
        font-size: 1.15rem;
        padding: 0.35rem 0.75rem;

        @media  ${(props) => props.theme.breakpoints.md} {
            width: 100%;
        }
    }
`;

export default GlobalStyles;
