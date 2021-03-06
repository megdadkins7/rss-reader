import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  html, body {
    width: 100%;
    height: 100vh;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased; 
    -moz-osx-font-smoothing: grayscale; 
  }
  a {
    text-decoration: none;
  }
  .App {
    text-align: center;
  }

  .App-header {
    background-color: #282c34;
    min-height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  .loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    width: 24em;
    -ms-interpolation-mode: bicubic;
  }

  .MuiInputBase-input-24 {
    text-align: center;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default GlobalStyles;
