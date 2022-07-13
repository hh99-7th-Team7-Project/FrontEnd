import { createGlobalStyle } from 'styled-components';
import './shared/css/font.css';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: ‘SUIT Variable’;
  }
  button, label, div {
    font-family: ‘SUIT Variable’;
  }
input{
  &:focus{
    outline: none;
    
  }
  &::placeholder{
    color: #ddd;
  }
  
}
`;

export default GlobalStyle;