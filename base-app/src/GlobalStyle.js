import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: "Inconsolata", monospace;
    background-color: #101010;
    color: #d6dedf;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding-top: ${props => props.paddingTop ? props.paddingTop : 0}px;
  }
`;

export default GlobalStyle;