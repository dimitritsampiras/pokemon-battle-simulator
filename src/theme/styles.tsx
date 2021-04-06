import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box
  }
  
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily.sans[3]};
  }

  #root {
    display: flex;
    /* padding-top: 50px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 730px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 600;
  }
  h1 {
    font-size: 40;
    line-height: 1;
  }

  h2 {
    font-size: 36,
  }
  h3 {
    font-size: 30,
  }
  h5 {
    font-size: 16;
    letter-spacing: 5;
  }
  button {
    border: none;
    outline: none;
    margin: 0;
    padding: 0;
  }
  button:focus {
    outline: none
  }
`
export default GlobalStyle
