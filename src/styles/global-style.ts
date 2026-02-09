import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  button, input, select {
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
  }

  p, h1, h2, h3, h4, h5, h6, button, input, select {
    margin: 0;
    padding: 0;
    letter-spacing: inherit;
    line-height: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 14px;
    letter-spacing: 0%;
    line-height: 1;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
