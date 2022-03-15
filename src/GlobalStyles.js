import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f7f7f7;
    margin: 0px;
    font-family: sans-serif;
    font-size: 112.5%;
  }

  input, label, button, textarea {
    font-size: 1em;
  }

`;
