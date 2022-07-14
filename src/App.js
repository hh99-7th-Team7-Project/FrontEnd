import React from 'react';
import './App.css';
import Router from './shared/Router';
import styled from 'styled-components'
import {AnimatePresence} from 'framer-motion'


function App() {
  return (
    <SCwrap> 
      <AnimatePresence>
        <Router />
        </AnimatePresence>
    </SCwrap>
  );
}



export default App;

const SCwrap = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center; */
`