import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
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