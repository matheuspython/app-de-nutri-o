import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`
  :root {
      --primary: #EB1616;
      --secondary: #191C24;
      --light: #6C7293;
      --dark: #000000;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body{
    font-family: sans-serif;
    background-color: #000;
  }
  body{
    background-color: var(--dark);
    color: var(--light);
  }
`