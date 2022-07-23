import { createGlobalStyle } from 'styled-components';
import './shared/css/font.css';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

  
    font-display:block;
  }
  html, body {
    font-family: ‘SUIT Variable’;
    font-weight: 600;

    line-height: 24.96px;
  }
  button, label, div,p, textarea {
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

::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-thumb {  
  background-color: #2c278c;
  border-radius: 10px;
}
::-webkit-scrollbar-track {
  background-color: #EEE;  
}

:root{
  --main: #2C278C
}

`;

export default GlobalStyle;
