import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Theme } from 'styles/theme';

interface ThemeInterface {
  theme: Theme;
}

const GlobalStyle = createGlobalStyle<ThemeInterface>`
${reset}
  html {
    font-size: 20px;
  }
  html,
  body {
    background: ${({ theme }) => theme.bgColor};
    background-image: ${({ theme }) => theme.bgImg};
    color: ${({ theme }) => theme.text};
    font-family: 'spoqa', sans-serif;
    font-weight: 400;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: 16px;
    height: 100vh;
    width: 100vw;
    position: relative;
  }

  * {
    box-sizing: border-box;
  }

  body,
  input,
  textarea,
  ::selection,
  button {
  font-family: inherit;
  letter-spacing: -0.12px;
  }

  button {
    outline: 0;
    border: 0;
    cursor: pointer;
  }
  ol, ul, li {
    list-style: none;
  }

`;

export default GlobalStyle;
