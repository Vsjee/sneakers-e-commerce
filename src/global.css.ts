import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.1rem;
    line-height: 24px;
    font-weight: 400;
    
    color-scheme: light dark;
    color: rgba(0, 0, 0, 0.87);
    background-color: #ffffff;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
  
  a {
    font-weight: 500;
    color: #fff;
    text-decoration: inherit;
    transition: .4s ease-in-out;
  }
  a:hover {
    color: #fc4747;
  }

  h1 {
    font-size: 3.2rem;
    line-height: 1.1;
  }

  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6rem 1.2rem;
    font-size: 1rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
  }
`

export default GlobalStyle