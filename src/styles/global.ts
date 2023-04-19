import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --grey-900: #121214;
    --grey-800: #202024;
    --grey-400: #71718A;
    --grey-200: #C4C4CC;
    --grey-100: #E1E1E6;

    --pink-500: #D53F8C;
    --pink-300: #F687B3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    background: var(--grey-900);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }
`
