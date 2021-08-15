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
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.text};
    font-family: 'spoqa', sans-serif;
    font-weight: 400;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  body,
  body *,
  input,
  textarea,
  ::selection,
  button {
  font-family: inherit;
  letter-spacing: -0.12px;
  cursor: pointer;
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
