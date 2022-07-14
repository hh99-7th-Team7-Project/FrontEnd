import { createGlobalStyle } from 'styled-components';
import './shared/css/font.css';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: ‘SUIT Variable’;
    font-weight: 700;
    line-height: 24.96px;
  }
  button, label, div {
    font-family: ‘SUIT Variable’;
    font-weight: 700;
    line-height: 24.96px;
  }
input{
   font-family: ‘SUIT Variable’;
  &:focus{
    outline: none;
  }
  &::placeholder{
    color: #ddd;
  }
  
}
select{
  font-family: ‘SUIT Variable’;
}
button{
  font-family: ‘SUIT Variable’;
}
`;

export default GlobalStyle;