import React from 'react';
import './App.css';
import Router from './shared/Router';
import styled from 'styled-components'


function App() {
  return (
    <SCwrap> 
        <Router />
    </SCwrap>
  );
}



export default App;

const SCwrap = styled.div`
display: flex;
justify-content: center;
`